import { axiosBasic } from "..";

export const postRefreshToken = async () => {
  try {
    const res = await axiosBasic({
      method: "post",
      url: "/api/auth/refresh",
      headers: {
        "Content-Type": "text/plain",
      },
      withCredentials: true,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
