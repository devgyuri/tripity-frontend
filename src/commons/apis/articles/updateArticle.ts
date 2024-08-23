import { axiosAccessFunc } from "..";
import { IArticleWriteInput } from "../../types/articles/articleWriteInput";

const axiosAccess = axiosAccessFunc();

export const updateArticle = async (
  id: number,
  formData: IArticleWriteInput
) => {
  try {
    const res = await axiosAccess({
      method: "put",
      url: `/api/articles/${id}`,
      data: formData,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
