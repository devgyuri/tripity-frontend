import * as S from "./UserMenu.styles";
import useClickHeader from "../../../../../commons/hooks/useClickHeader";
import Alarm from "../../../../units/alarm/Alarm.index";
import Chat from "../../../../units/chat/Chat.index";

export default function UserMenu(): JSX.Element {
  const {
    alarmRef,
    handleToggleAlarm,
    isOpenAlarm,
    chatRef,
    handleToggleChat,
    isOpenChat,
  } = useClickHeader();

  return (
    <>
      <S.Wrapper>
        <S.AlarmToggleButton ref={alarmRef} onClick={handleToggleAlarm}>
          <Alarm
            isOpenAlarm={isOpenAlarm}
            handleToggleAlarm={handleToggleAlarm}
          ></Alarm>
        </S.AlarmToggleButton>
        <S.ChatToggleButton ref={chatRef} onClick={handleToggleChat}>
          <Chat isOpenChat={isOpenChat} handleToggleChat={handleToggleChat} />
        </S.ChatToggleButton>
      </S.Wrapper>
    </>
  );
}
