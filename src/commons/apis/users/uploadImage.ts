import { axiosAccessFunc } from "..";

const axiosAccess = axiosAccessFunc();

export const uploadImage = async (formData: FormData) => {
  try {
    const res = await axiosAccess({
      method: "patch",
      url: "/api/users/image",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
