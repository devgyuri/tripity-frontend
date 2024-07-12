import { axiosBasic } from "..";
import { ILoginInput } from "../../types/auth/loginInput";

export const logIn = async (formData: ILoginInput) => {
  try {
    const res = await axiosBasic({
      method: "post",
      url: "/login",
      data: formData,
      withCredentials: true,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
