import { useQueries } from "react-query";
import {
  Content1,
  Title1,
  Title2,
} from "../../../../commons/styles/content.styles";
import { REACT_QUERY_KEY } from "../../../../commons/constant/reactQueryKey";
import { fetchData } from "../../../../commons/utils/fetchData";
import * as S from "./ArticleView.styles";
import TextEditorView from "../../../commons/textEditorView/TextEditorView.index";
import { IArticleDetail } from "../../../../commons/types/articles/articleDetail";
import { dateToFormat } from "../../../../commons/utils/dateFormat";

interface IArticleViewProps {
  articleId: number;
}

export default function ArticleView({
  articleId,
}: IArticleViewProps): JSX.Element {
  const queries = useQueries([
    {
      queryKey: REACT_QUERY_KEY.articleDetail,
      queryFn: () => fetchData(`/api/articles/${articleId.toString()}`),
    },
  ]);

  const articleData = queries[0].data as IArticleDetail;

  console.log(articleId);
  console.log(queries);

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <Title2>{articleData?.title}</Title2>
          <Content1>{dateToFormat(articleData?.createdAt)}</Content1>
          <TextEditorView content={articleData?.content} />
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
