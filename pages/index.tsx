import { useState } from "react";
import { test } from "../src/commons/apis/test/test";
import { useQuery } from "react-query";
import { REACT_QUERY_KEY } from "../src/commons/constant/reqctQueryKey";

export default function Home() {
  const [message, setMessage] = useState("");

  const onClickButton = async (): Promise<void> => {
    const result = await test();
    setMessage(result);
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
    </>
  );
}
