import { axiosBasic } from "..";
import { ILoginInput } from "../../types/auth/loginInput";

export const signIn = async (formData: ILoginInput) => {
  try {
    const res = await axiosBasic({
      method: "post",
      url: "/api/auth/login",
      data: formData,
      withCredentials: true,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
