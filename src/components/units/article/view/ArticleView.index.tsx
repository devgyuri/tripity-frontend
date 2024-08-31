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
  data: IArticleDetail;
}

export default function ArticleView({ data }: IArticleViewProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <Title2>{data?.title}</Title2>
          <Content1>{dateToFormat(data?.createdAt)}</Content1>
          <TextEditorView content={data?.content} />
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
