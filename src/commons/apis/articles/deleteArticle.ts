import { axiosAccessFunc } from "..";

const axiosAccess = axiosAccessFunc();

export const deleteArticle = async (articleId: number) => {
  try {
    const res = await axiosAccess({
      method: "delete",
      url: `/api/articles/${articleId}`,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
