import * as S from "./SignUpForm.styles";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ISignUpInput } from "../../../commons/types/auth/signUpInput";
import { useSignUp } from "../../../commons/hooks/useSignUp";
import { AUTH_FORM_REGEX } from "../../../commons/constant/authFormRegex";
import { useEffect, useState } from "react";
import { emailSendVerify } from "../../../commons/apis/auth/emailSendVerify";
import { emailCheckVerify } from "../../../commons/apis/auth/emailCheckVerify";

export default function SignUpForm(): JSX.Element {
  const router = useRouter();
  const { signUpMutation } = useSignUp();

  // email verification
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const emailVerificationTime = 60 * 5; // seconds
  const [timer, setTimer] = useState(emailVerificationTime);
  const [timerActive, setTimerActive] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setError,
    getValues,
    setValue,
    reset,
  } = useForm<ISignUpInput>({
    mode: "onChange",
  });

  useEffect(() => {
    let timeCount: NodeJS.Timeout | undefined;
    if (timerActive && timer > 0) {
      timeCount = setInterval(() => setTimer(timer - 1), 1000);
    }
    if (timer === 0) {
      setTimerExpired(true);
      if (timeCount !== undefined) {
        clearInterval(timeCount);
      }
    }

    if (timeCount !== undefined) {
      return () => clearInterval(timeCount);
    }
  }, [timer, timerActive]);

  const formatTimeToMSS = (timer: number): string => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const formattedTime: string = `${minutes.toString().padStart(2, "0")}:
    ${seconds.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const handleSendEmailVerification = async () => {
    try {
      setIsSendingEmail(true);
      setTimerActive(true);
      await emailSendVerify(getValues("email"));
    } catch (error: any) {
      if (error.response.data.name === "DUPLICATED_EMAIL") {
        console.error("API 오류: ", error);
        setError("email", {
          message: "이미 가입된 이메일입니다.",
        });
      } else {
        setIsSendingEmail(false);
        setTimerActive(false);
        console.error("API 오류: ", error);
        setError("email", {
          message: "다시 시도해 주세요.",
        });
      }
    }
  };

  const handleResendEmail = async () => {
    try {
      await emailSendVerify(getValues("email"));
      setTimerExpired(false);
      setTimer(emailVerificationTime);
    } catch (error) {
      console.error("API 오류: ", error);
      setError("email", {
        message: "다시 시도해 주세요.",
      });
    }
  };

  const handleCheckEmailVerification = async () => {
    try {
      await emailCheckVerify(getValues("email"), getValues("emailAuthCode"));
      setEmailVerification(true);
      setTimerActive(false);
    } catch (error) {
      setEmailVerification(false);
      console.error("API 오류: ", error);
      setError("emailAuthCode", {
        message: "인증번호가 일치하지 않습니다.",
      });
    }
  };

  const onSubmit = async (data: ISignUpInput) => {
    try {
      await signUpMutation.mutateAsync(data, {
        onSuccess: (data) => {
          console.log("+++++ SignUpForm +++++");
          console.log(data);
          alert("회원가입이 완료되었습니다.");
          alert("로그인 해주세요.");
          router.push("/login");
        },
        onError: (error: any) => {
          const errorRes = error.response;
          setError("root", {
            message: errorRes.data,
          });
          console.log(error);
        },
      });
    } catch (error) {
      console.error("sign up api 호출 실패: ", error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label>이메일</S.Label>
          <S.EmailInput
            type="email"
            placeholder="이메일을 입력해 주세요."
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: AUTH_FORM_REGEX.email,
                message: "이메일 형식을 다시 확인해 주세요.",
              },
            })}
          />
          <S.Button
            disabled={!watch("email") || !!errors.email || isSendingEmail}
            onClick={handleSendEmailVerification}
          >
            이메일 인증
          </S.Button>
          {timerActive && (
            <>
              <S.Label>인증코드</S.Label>
              <S.BasicInput
                type="text"
                placeholder="인증코드를 입력해 주세요."
                aria-invalid={errors.emailAuthCode ? "true" : "false"}
                {...register("emailAuthCode", {
                  required: "인증코드를 입력해 주세요.",
                })}
              />
              <S.Timer>{formatTimeToMSS(timer)}</S.Timer>
              <S.Button
                disabled={!watch("emailAuthCode") || !!errors.emailAuthCode}
                onClick={handleCheckEmailVerification}
              >
                인증하기
              </S.Button>
              <S.Button onClick={handleResendEmail}>재전송</S.Button>
            </>
          )}
          <S.Label>닉네임</S.Label>
          <S.BasicInput
            type="text"
            placeholder="닉네임을 입력해 주세요."
            aria-invalid={errors.nickname ? "true" : "false"}
            {...register("nickname", {
              required: "닉네임을 입력해 주세요.",
              pattern: {
                value: AUTH_FORM_REGEX.nickname,
                message: "닉네임 형식을 다시 확인해 주세요.",
              },
            })}
          />
          <S.Label>비밀번호</S.Label>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            aria-invalid={errors.password ? "true" : "false"}
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
              pattern: {
                value: AUTH_FORM_REGEX.password,
                message: "비밀번호 형식을 다시 확인해 주세요.",
              },
            })}
          />
          <S.Label>비밀번호 확인</S.Label>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요."
            aria-invalid={errors.rePassword ? "true" : "false"}
            {...register("rePassword", {
              required: "비밀번호를 다시 입력해 주세요.",
              pattern: {
                value: AUTH_FORM_REGEX.password,
                message: "비밀번호 형식을 다시 확인해 주세요.",
              },
            })}
          />
          {errors.email ? (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          ) : errors.password ? (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          ) : errors.rePassword ? (
            <S.ErrorMessage>{errors.rePassword.message}</S.ErrorMessage>
          ) : (
            errors.root && (
              <S.ErrorMessage>{errors.root.message}</S.ErrorMessage>
            )
          )}
          <S.Button type="submit">회원가입</S.Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
