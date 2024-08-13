import styled from "@emotion/styled";

interface ILineInputProps {
  hasError: boolean;
}

export const NonBorderInput = styled.input`
  width: auto;
  height: 50px;
  padding: 0 16px;
  border: none;

  &::placeholder {
    font-weight: 300;
    color: var(--light-gray);
  }
 
  &:focus {
    outline: none;
`;

export const LineInput = styled.input`
  width: auto;
  height: 50px;
  padding-left: 16px;
  padding-right: 40px;
  margin-bottom: 10px;

  border: ${(props: ILineInputProps) =>
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

export const TextInput = styled.textarea`
  width: auto;
  height: 150px;
  padding: 16px;
  margin-bottom: 10px;
  resize: none;

  border: 1px solid var(--gray);
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
