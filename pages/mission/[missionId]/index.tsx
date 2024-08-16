import { useRouter } from "next/router";
import LayoutBody from "../../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../../src/components/commons/layout/header/LayoutHeader.index";
import MissionView from "../../../src/components/units/mission/view/MissionView.index";

export default function MissionDetailPage(): JSX.Element {
  const router = useRouter();
  const missionId = Number(router.query.missionId);

  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <MissionView missionId={missionId} />
      </LayoutBody>
    </>
  );
}
