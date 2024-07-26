import { axiosBasic } from "..";

export const emailCheckVerify = async (email: string, code: string) => {
  try {
    const res = await axiosBasic({
      method: "post",
      url: "api/auth/verify/check",
      data: { email, code },
    });
    const emailCodeCheck: boolean = res.data;
    return emailCodeCheck;
  } catch (error: any) {
    throw error;
  }
};
