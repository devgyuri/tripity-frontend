import { ReactElement } from "react";
import * as S from "./LayoutBody.styles";

interface ILayoutBodyProps {
  children?: ReactElement;
}

export default function LayoutBody(props: ILayoutBodyProps): JSX.Element {
  return (
    <>
      <S.Wrapper>{props.children}</S.Wrapper>
    </>
  );
}
