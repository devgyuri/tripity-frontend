import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY } from "../constant/reactQueryKey";
import { updateProfile } from "../apis/users/updateProfile";
import { IArticleWriteInput } from "../types/articles/articleWriteInput";
import { createArticle } from "../apis/articles/createArticle";

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

  return { createArticleMutation };
};
