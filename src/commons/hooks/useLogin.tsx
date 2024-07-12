import { useMutation, useQueryClient } from "react-query";
import { ILoginInput } from "../types/auth/loginInput";
import { signIn } from "../apis/auth/signIn";
import { REACT_QUERY_KEY } from "../constant/reqctQueryKey";
import { useCookies } from "react-cookie";
import {
  ACCESS_TOKEN_MAX_AGE,
  REFRESH_TOKEN_MAX_AGE,
} from "../constant/cookieMaxAge";
import { ILoginUserInfo } from "../types/auth/loginUserInfo";
import { useSetRecoilState } from "recoil";
import { loginUserInfoState } from "../stores/loginUserInfoState";
import { postRefreshToken } from "../apis/auth/postRefreshToken";

export const useLogin = () => {
  const [cookies, setCookie] = useCookies();
  const queryClient = useQueryClient();
  const setUserInfo = useSetRecoilState(loginUserInfoState);

  const loginMutation = useMutation({
    mutationFn: (data: ILoginInput) => signIn(data),
    onSuccess: (data) => {
      // console.log("로그인 시도");
      // console.log("data: ", data);
      const { accessToken, refreshToken, userInfo } = data;
      queryClient.setQueryData(REACT_QUERY_KEY.accessToken, accessToken);
      queryClient.setQueryData(REACT_QUERY_KEY.refreshToken, refreshToken);
      queryClient.setQueryData(REACT_QUERY_KEY.userInfo, userInfo);
      localStorage.setItem("access_token", accessToken);
      // setCookie("accessToken", accessToken, {
      //   path: "/",
      //   maxAge: ACCESS_TOKEN_MAX_AGE,
      // });
      // setCookie("refreshToken", refreshToken, {
      //   path: "/",
      //   maxAge: REFRESH_TOKEN_MAX_AGE,
      // });
      // const userInfo: ILoginUserInfo = {
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
