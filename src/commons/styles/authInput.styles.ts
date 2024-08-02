import styled from "@emotion/styled";

interface IInputProps {
  hasError: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 16px;
  padding-right: 40px;
  margin-bottom: 10px;

  border: ${(props: IInputProps) =>
    props.hasError ? "1px solid var(--error-color)" : "1px solid var(--gray)"};
  border-radius: 8px;

  font-size: 16px;

  &::placeholder {
    font-weight: 300;
    color: var(--light-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.disabled ? "var(--light-gray)" : "var(--primary-color)"};
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

export const LineButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: var(--white);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--error-color);
`;
