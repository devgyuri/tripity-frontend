import { axiosAccessFunc } from "..";
import { IArticleWriteInput } from "../../types/articles/articleWriteInput";

const axiosAccess = axiosAccessFunc();

export const createArticle = async (formData: IArticleWriteInput) => {
  try {
    const res = await axiosAccess({
      method: "post",
      url: "/api/articles",
      data: formData,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
