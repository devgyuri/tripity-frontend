import { axiosBasic } from "..";

export const emailSendVerify = async (email: string) => {
  try {
    const res = await axiosBasic({
      method: "post",
      url: "/api/auth/verify/send",
      data: email,
    });
    return res;
  } catch (error: any) {
    throw error;
  }
};
