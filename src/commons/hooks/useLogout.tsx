import { useMutation, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../stores/userInfoState";
import { logOut } from "../apis/auth/logout";
import { REACT_QUERY_KEY } from "../constant/reactQueryKey";
import { loginState } from "../stores/loginState";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setLoginState = useSetRecoilState(loginState);

  const logoutMutation = useMutation({
    mutationFn: () => logOut(),
    onSuccess: () => {
      localStorage.removeItem("access_token");
      setUserInfo({
        id: null,
        nickname: null,
        email: null,
        intro: null,
        image: null,
      });
      setLoginState(false);
    },
    onError: (error) => {
      console.error("logout 실패: ", error);
    },
  });

  const onClickLogout =
    (handleToggleMenu: () => void) => async (): Promise<void> => {
      handleToggleMenu();
      try {
        await logoutMutation.mutateAsync();
      } catch (error) {
        console.error("logout api 호출 실패: ", error);
      }
    };

  return { logoutMutation, onClickLogout };
};
