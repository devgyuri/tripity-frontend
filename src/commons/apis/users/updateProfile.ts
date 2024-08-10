import { axiosAccessFunc } from "..";

const axiosAccess = axiosAccessFunc();

export const updateProfile = async (formData: IEditProfileInput) => {
  try {
    const res = await axiosAccess({
      method: "put",
      url: "/api/users/profile",
      data: formData,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
