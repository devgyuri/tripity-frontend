import { useMutation, useQueryClient } from "react-query";
import { ILoginInput } from "../types/auth/loginInput";
import { logIn } from "../apis/auth/logIn";
import { REACT_QUERY_KEY } from "../constant/reactQueryKey";
import { useSetRecoilState } from "recoil";
import { postRefreshToken } from "../apis/auth/postRefreshToken";
import { userInfoState } from "../stores/userInfoState";
import { loginState } from "../stores/loginState";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setLoginState = useSetRecoilState(loginState);

  const loginMutation = useMutation({
    mutationFn: (data: ILoginInput) => logIn(data),
    onSuccess: (data) => {
      const { accessToken, userInfo } = data;
      queryClient.setQueryData(REACT_QUERY_KEY.accessToken, accessToken);
      queryClient.setQueryData(REACT_QUERY_KEY.userInfo, userInfo);
      localStorage.setItem("access_token", accessToken);
      setUserInfo(userInfo);
      setLoginState(true);
      // setCookie("accessToken", accessToken, {
      //   path: "/",
      //   maxAge: ACCESS_TOKEN_MAX_AGE,
      // });
      // setCookie("refreshToken", refreshToken, {
      //   path: "/",
      //   maxAge: REFRESH_TOKEN_MAX_AGE,
      // });
      // const userInfo: IUserInfo = {
      //   ...userResponse,
      // };
      // setCookie("userInfo", JSON.stringify(userInfo), {
      //   path: "/",
      //   maxAge: ACCESS_TOKEN_MAX_AGE,
      // });
      // setUserInfo(userInfo);
    },
    onError: (error) => {
      console.error("login 실패: ", error);
    },
  });

  const refreshTokenMutation = useMutation({
    mutationFn: () => postRefreshToken(),
    onSuccess: (resData) => {
      const { accessToken } = resData;
      queryClient.setQueryData(REACT_QUERY_KEY.accessToken, accessToken);
      // queryClient.setQueryData(REACT_QUERY_KEY.refreshToken, refreshToken);
      // setCookie("accessToken", accessToken, {
      //   path: "/",
      //   maxAge: ACCESS_TOKEN_MAX_AGE,
      // });
      // setCookie("refreshToken", refreshToken, {
      //   path: "/",
      //   maxAge: REFRESH_TOKEN_MAX_AGE,
      // });
    },
  });

  return { loginMutation, refreshTokenMutation };
};
