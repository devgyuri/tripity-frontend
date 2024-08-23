import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.index";
import ArticleWrite from "../../../src/components/units/article/write/ArticleWrite.index";

export default function ArticleNewPage(): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <ArticleWrite />
      </LayoutBody>
    </>
  );
}
