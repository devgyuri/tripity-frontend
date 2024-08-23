import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY } from "../constant/reactQueryKey";
import { updateProfile } from "../apis/users/updateProfile";
import { IArticleWriteInput } from "../types/articles/articleWriteInput";
import { createArticle } from "../apis/articles/createArticle";
import { updateArticle } from "../apis/articles/updateArticle";

interface updateArticleArgs {
  articleId: number;
  updateData: IArticleWriteInput;
}

export const useArticle = () => {
  const queryClient = useQueryClient();

  const createArticleMutation = useMutation({
    mutationFn: (data: IArticleWriteInput) => createArticle(data),
    onSuccess: (data) => {
      // queryClient.setQueryData(REACT_QUERY_KEY.userInfo, data);
    },
    onError: (error) => {
      console.error("article create 실패: ", error);
    },
  });

  const updateArticleMutation = useMutation({
    mutationFn: (data: updateArticleArgs) =>
      updateArticle(data.articleId, data.updateData),
    onError: (error) => {
      console.error("article update 실패: ", error);
    },
  });

  return { createArticleMutation, updateArticleMutation };
};
