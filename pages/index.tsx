import { useState } from "react";
import { test } from "../src/commons/apis/test/test";
import { useQuery } from "react-query";
import { REACT_QUERY_KEY } from "../src/commons/constant/reqctQueryKey";
import { useLogout } from "../src/commons/hooks/useLogout";

export default function Home() {
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
    </>
  );
}
