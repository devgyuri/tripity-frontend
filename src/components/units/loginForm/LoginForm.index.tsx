import { useCookies } from "react-cookie";
import { useLogin } from "../../../commons/hooks/useLogin";
import * as S from "./LoginForm.styles";
import { useForm } from "react-hook-form";
import { AUTH_FORM_REGEX } from "../../../commons/constant/authFormRegex";
import { ILoginInput } from "../../../commons/types/auth/loginInput";
import { useRouter } from "next/router";

export default function LoginForm(): JSX.Element {
  const router = useRouter();
  const { pathname } = router;
  const { loginMutation } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginInput>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: ILoginInput) => {
    try {
      await loginMutation.mutateAsync(data, {
        onSuccess: (data) => {
          const { userInfo } = data;
          console.log("+++++ LoginForm +++++");
          console.log(data);
          console.log(userInfo);
          router.push("/");
        },
        onError: (error: any) => {
          const errorRes = error.response;
          if (errorRes.status === 409) {
            setError("root", {
              message: errorRes.data,
            });
          } else {
            setError("root", {
              message: "이메일 혹은 비밀번호가 올바르지 않습니다.",
            });
          }
        },
      });
    } catch (error) {
      console.error("login api 호출 실패: ", error);
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
          {errors.email ? (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          ) : errors.password ? (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          ) : (
            errors.root && (
              <S.ErrorMessage>{errors.root.message}</S.ErrorMessage>
            )
          )}
          <S.Button type="submit">로그인</S.Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
}