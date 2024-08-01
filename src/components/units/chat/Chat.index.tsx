import * as S from "./Chat.styles";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../commons/stores/userInfoState";

interface IChatProps {
  isOpenChat: boolean;
  handleToggleChat: () => void;
}

const Chat = ({ isOpenChat, handleToggleChat }: IChatProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const userInfo = useRecoilValue(userInfoState);
  const userId = userInfo.id;

  return (
    <>
      <S.ChatButton>
        <S.ChatIcon />
      </S.ChatButton>
    </>
  );
};

export default Chat;
