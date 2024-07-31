import { GetServerSidePropsContext } from "next";
import { postRefreshToken } from "../../../src/commons/apis/auth/postRefreshToken";
import { useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../../../src/commons/stores/userInfoState";
import { loginState } from "../../../src/commons/stores/loginState";
import { REACT_QUERY_KEY } from "../../../src/commons/constant/reactQueryKey";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface IOAuth2RedirectPageProps {
  token: string | null;
}

export default function OAuth2RedirectPage({
  token,
}: IOAuth2RedirectPageProps): JSX.Element {
  const router = useRouter();
  const queryClient = useQueryClient();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setLoginState = useSetRecoilState(loginState);

  const handleSNSLogin = async () => {
    try {
      if (token) {
        // access token은 받았지만 user info 정보 없으므로 다시 받아와야 함
        const resData = await postRefreshToken();
        const { accessToken, userInfo } = resData;
        queryClient.setQueryData(REACT_QUERY_KEY.accessToken, accessToken);
        queryClient.setQueryData(REACT_QUERY_KEY.userInfo, userInfo);
        localStorage.setItem("access_token", accessToken);
        setUserInfo(userInfo);
        setLoginState(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/");
    }
  };

  useEffect(() => {
    handleSNSLogin();
  });

  return (
    <>
      <h1>Redirect page</h1>
    </>
  );
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { token } = context.query;

  return {
    props: {
      token: token || null,
    },
  };
};
