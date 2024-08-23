import { useRouter } from "next/router";
import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.index";
import ArticleView from "../../../src/components/units/article/view/ArticleView.index";
import { CustomButton } from "../../../src/commons/styles/button.styles";
import Link from "next/link";

export default function ArticleDetailPage(): JSX.Element {
  const router = useRouter();
  const articleId = Number(router.query.articleId);

  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <>
          <ArticleView articleId={articleId} />
          <Link href={`/article/${articleId}/edit`}>
            <CustomButton isFill={true}>수정하기</CustomButton>
          </Link>
        </>
      </LayoutBody>
    </>
  );
}
