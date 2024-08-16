import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.index";
import MissionView from "../../../src/components/units/mission/view/MissionView.index";

export default function MissionDetailPage(): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <MissionView id={2} />
      </LayoutBody>
    </>
  );
}
