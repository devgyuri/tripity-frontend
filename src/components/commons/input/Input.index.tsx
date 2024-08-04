import { InputHTMLAttributes } from "react";
import * as S from "./Input.styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly disabled?: boolean;
  readonly hasError?: boolean;
  readonly ariaInvalid?: boolean;
}

const Input = ({
  type,
  placeholder,
  ariaInvalid,
  disabled,
  hasError,
}: IInputProps) => {
  return (
    <S.LineInput
      type={type}
      disabled={disabled}
      hasError={hasError}
      placeholder={placeholder}
      aria-invalid={ariaInvalid ? "true" : "false"}
    />
  );
};

export default Input;
