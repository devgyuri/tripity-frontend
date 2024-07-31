import { useRouter } from "next/router";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return { onClickMoveToPage };
};
