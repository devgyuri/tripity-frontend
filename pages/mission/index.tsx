import Link from "next/link";
import { Button } from "../../src/commons/styles/button.styles";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../src/components/commons/layout/header/LayoutHeader.index";

export default function MissionPage(): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <Link href={"/mission/new"}>
          <Button>작성하기</Button>
        </Link>
      </LayoutBody>
    </>
  );
}
