import styled from "@emotion/styled";

export const Button = styled.button`
  width: fit-content;
  padding: 10px;
  height: 50px;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`;

export const LineButton = styled.button`
  width: fit-content;
  padding: 10px;
  height: 50px;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`;

export const DisabledButton = styled.button`
  width: fit-content;
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
  width: fit-content;
  padding: 10px;
  height: 50px;
  background-color: var(--error-color);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
`;
