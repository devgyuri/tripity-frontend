import { useQueries } from "react-query";
import {
  Content1,
  Title1,
  Title2,
} from "../../../../commons/styles/content.styles";
import { REACT_QUERY_KEY } from "../../../../commons/constant/reactQueryKey";
import { fetchData } from "../../../../commons/utils/fetchData";
import * as S from "./MissionView.styles";
import TextEditorView from "../../../commons/textEditorView/TextEditorView.index";
import { IMissionDetail } from "../../../../commons/types/missions/missionDetail";

interface IMissionViewProps {
  id: number;
}

export default function MissionView({ id }: IMissionViewProps): JSX.Element {
  const queries = useQueries([
    {
      queryKey: REACT_QUERY_KEY.missionDetail,
      queryFn: () => fetchData(`/api/missions/${id.toString()}`),
    },
  ]);

  const missionData = queries[0].data as IMissionDetail;

  console.log(id);
  console.log(missionData);

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <Title1>Mission Detail</Title1>
          <Title2>{missionData?.title}</Title2>
          <Content1>{missionData?.name}</Content1>
          <TextEditorView content={missionData?.content} />
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
