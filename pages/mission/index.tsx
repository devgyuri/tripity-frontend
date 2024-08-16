import Link from "next/link";
import { CustomButton } from "../../src/commons/styles/button.styles";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../src/components/commons/layout/header/LayoutHeader.index";

export default function MissionPage(): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <Link href={"/mission/new"}>
          <CustomButton isFill={true}>작성하기</CustomButton>
        </Link>
      </LayoutBody>
    </>
  );
}
