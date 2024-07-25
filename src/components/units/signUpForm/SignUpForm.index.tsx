import * as S from "../loginForm/LoginForm.styles";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ISignUpInput } from "../../../commons/types/auth/signUpInput";
import { useSignUp } from "../../../commons/hooks/useSignUp";
import { AUTH_FORM_REGEX } from "../../../commons/constant/authFormRegex";

export default function SignUpForm(): JSX.Element {
  const router = useRouter();
  const { signUpMutation } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignUpInput>({
    mode: "onChange",
    criteriaMode: "all",
  });

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
          <S.Label>닉네임</S.Label>
          <S.EmailInput
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
