import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.index";
import MissionWrite from "../../../src/components/units/mission/write/MissionWrite.index";

export default function BoardNewPage(): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <MissionWrite />
      </LayoutBody>
    </>
  );
}
