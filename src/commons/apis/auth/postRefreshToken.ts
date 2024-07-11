import { axiosBasic } from "..";
import { ILoginInput } from "../../types/auth/loginInput";

export const postRefreshToken = async (refreshToken: string) => {
  try {
    const res = await axiosBasic({
      method: "post",
      url: "/auth/refresh",
      data: refreshToken,
      headers: {
        "Content-Type": "text/plain",
      },
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
