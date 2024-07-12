import { axiosBasic } from "..";

export const logOut = async () => {
  try {
    const res = await axiosBasic({
      method: "delete",
      url: "/api/auth/logout",
      withCredentials: true,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
