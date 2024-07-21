import { useState } from "react";
import { test } from "../src/commons/apis/test/test";
import { useQuery } from "react-query";
import { REACT_QUERY_KEY } from "../src/commons/constant/reactQueryKey";
import { useLogout } from "../src/commons/hooks/useLogout";
import Link from "next/link";

export default function Home() {
  const API_BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL;
  const OAUTH2_REDIRECT_URI = process.env.NEXT_PUBLIC_SNS_REDIRECT_URI;
  const GOOGLE_AUTH_URL = `${API_BASE_URI}/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}/google`;
  const NAVER_AUTH_URL = `${API_BASE_URI}/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}/naver`;
  const KAKAO_AUTH_URL = `${API_BASE_URI}/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}/kakao`;

  const [message, setMessage] = useState("");
  const { logoutMutation } = useLogout();

  const onClickButton = async (): Promise<void> => {
    const result = await test();
    setMessage(result);
  };

  const onClickLogout = async (): Promise<void> => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error("logout api 호출 실패: ", error);
    }
  };

  const queryKey = [REACT_QUERY_KEY.test];

  const { data, isError, isLoading } = useQuery(queryKey, () => test());

  return (
    <>
      <img src="/images/logo.png" />
      <h1>Index page</h1>
      <button onClick={onClickButton}>click</button>
      {message}
      <h3>{"data: " + data}</h3>
      <button onClick={onClickLogout}>Logout</button>

      <Link href={GOOGLE_AUTH_URL}>Google Login</Link>
      <Link href={NAVER_AUTH_URL}>Naver Login</Link>
      <Link href={KAKAO_AUTH_URL}>Kakao Login</Link>
    </>
  );
}
