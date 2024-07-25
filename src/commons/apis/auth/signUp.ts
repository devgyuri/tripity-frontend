import { axiosBasic } from "..";
import { ISignUpInput } from "../../types/auth/signUpInput";

export const signUp = async (formData: ISignUpInput) => {
  try {
    const res = await axiosBasic({
      method: "post",
      url: "/api/auth/signup",
      data: formData,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
