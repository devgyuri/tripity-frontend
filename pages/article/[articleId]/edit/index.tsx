import { useRouter } from "next/router";
import LayoutBody from "../../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../../src/components/commons/layout/header/LayoutHeader.index";
import ArticleWrite from "../../../../src/components/units/article/write/ArticleWrite.index";
import { useQueries } from "react-query";
import { REACT_QUERY_KEY } from "../../../../src/commons/constant/reactQueryKey";
import { fetchData } from "../../../../src/commons/utils/fetchData";
import { IArticleDetail } from "../../../../src/commons/types/articles/articleDetail";

export default function ArticleEditPage(): JSX.Element {
  const router = useRouter();
  const articleId = Number(router.query.articleId);

  const queries = useQueries([
    {
      queryKey: REACT_QUERY_KEY.articleDetail,
      queryFn: () => fetchData(`/api/articles/${articleId.toString()}`),
    },
  ]);

  const articleData = queries[0].data as IArticleDetail;

  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <ArticleWrite defaultData={articleData} isEdit={true} />
      </LayoutBody>
    </>
  );
}
