import * as S from "./Button.styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly fill?: boolean;
  readonly hasError?: boolean;
  readonly disabled?: boolean;
  readonly onClick?: () => void;
}

const Button = ({
  children,
  fill,
  hasError,
  type,
  disabled,
  onClick,
}: ButtonProps) => {
  if (disabled === true) {
    return (
      <S.DisabledButton type={type} disabled={disabled} onClick={onClick}>
        {children}
      </S.DisabledButton>
    );
  }

  if (hasError === true) {
    return (
      <S.ErrorButton type={type} disabled={disabled} onClick={onClick}>
        {children}
      </S.ErrorButton>
    );
  }

  if (fill === false) {
    return (
      <S.LineButton type={type} disabled={disabled} onClick={onClick}>
        {children}
      </S.LineButton>
    );
  }

  return (
    <S.Button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
