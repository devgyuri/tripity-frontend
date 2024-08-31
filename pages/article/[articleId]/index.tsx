import { useRouter } from "next/router";
import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.index";
import ArticleView from "../../../src/components/units/article/view/ArticleView.index";
import { CustomButton } from "../../../src/commons/styles/button.styles";
import Link from "next/link";
import { useQueries } from "react-query";
import { REACT_QUERY_KEY } from "../../../src/commons/constant/reactQueryKey";
import { fetchData } from "../../../src/commons/utils/fetchData";
import { IArticleDetail } from "../../../src/commons/types/articles/articleDetail";
import CommentList from "../../../src/components/units/comment/list/CommentList.index";

export default function ArticleDetailPage(): JSX.Element {
  const router = useRouter();
  const articleId = Number(router.query.articleId);

  const queries = useQueries([
    {
      queryKey: REACT_QUERY_KEY.articleDetail,
      queryFn: () => fetchData(`/api/articles/${articleId.toString()}`),
    },
  ]);

  const articleData = queries[0].data as IArticleDetail;

  console.log(articleData);
  console.log("queries: ", queries);

  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <>
          <ArticleView data={articleData} />
          <Link href={`/article/${articleId}/edit`}>
            <CustomButton isFill={true}>수정하기</CustomButton>
          </Link>
          <CommentList data={articleData?.comments} />
        </>
      </LayoutBody>
    </>
  );
}
