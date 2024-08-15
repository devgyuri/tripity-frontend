import styled from "@emotion/styled";

interface IButtonProps {
  isFillWidth?: boolean;
  ifFill?: boolean;
  isDisabled?: boolean;
}

export const CustomButton = styled.button`
  width: ${(props: IButtonProps) =>
    props.isFillWidth ? "100%" : "fit-content"};
  padding: 10px;
  height: 50px;
  background-color: ${(props: IButtonProps) =>
    props.isDisabled
      ? "var(--light-gray)"
      : props.ifFill
        ? "var(--primary-color)"
        : "transparent"};
  color: ${(props: IButtonProps) =>
    props.ifFill === false ? "var(--primary-color)" : "var(--white)"};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: ${(props: IButtonProps) =>
    props.isDisabled ? "not-allowed" : "pointer"};
`;

export const LineButton = styled.button`
  width: ${(props: IButtonProps) =>
    props.isFillWidth ? "100%" : "fit-content"};
  padding: 10px;
  height: 50px;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const DisabledButton = styled.button`
  width: ${(props: IButtonProps) =>
    props.isFillWidth ? "100%" : "fit-content"};
  padding: 10px;
  height: 50px;
  background-color: var(--light-gray);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export const ErrorButton = styled.button`
  width: ${(props: IButtonProps) =>
    props.isFillWidth ? "100%" : "fit-content"};
  padding: 10px;
  height: 50px;
  background-color: var(--error-color);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
`;
