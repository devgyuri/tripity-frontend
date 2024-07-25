import { useMutation, useQueryClient } from "react-query";
import { ISignUpInput } from "../types/auth/signUpInput";
import { signUp } from "../apis/auth/signUp";

export const useSignUp = () => {
  const signUpMutation = useMutation({
    mutationFn: (data: ISignUpInput) => signUp(data),
    onSuccess: (data) => {
      console.log("++++ useSignUp +++++");
    },
    onError: (error) => {
      console.error("signUp 실패: ", error);
    },
  });

  return { signUpMutation };
};
