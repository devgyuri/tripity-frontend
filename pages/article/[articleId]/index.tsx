import { useRouter } from "next/router";
import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.index";
import ArticleView from "../../../src/components/units/article/view/ArticleView.index";

export default function ArticleDetailPage(): JSX.Element {
  const router = useRouter();
  const articleId = Number(router.query.articleId);

  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <ArticleView articleId={articleId} />
      </LayoutBody>
    </>
  );
}
