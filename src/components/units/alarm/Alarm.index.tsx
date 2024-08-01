import * as S from "./Alarm.styles";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../commons/stores/userInfoState";

interface IAlarmProps {
  isOpenAlarm: boolean;
  handleToggleAlarm: () => void;
}

const Alarm = ({ isOpenAlarm, handleToggleAlarm }: IAlarmProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const userInfo = useRecoilValue(userInfoState);
  const userId = userInfo.id;

  return (
    <>
      <S.AlarmButton>
        <S.AlarmIcon />
      </S.AlarmButton>
    </>
  );
};

export default Alarm;
