import styled from "@emotion/styled";

export const OAuthWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GoogleButton = styled.button`
  width: 90%;
  height: 50px;
  background-color: var(--google-color);
  color: var(--black);
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
