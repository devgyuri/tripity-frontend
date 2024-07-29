import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoogleButton = styled.button`
  margin-bottom: 10px;
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

export const KakaoButton = styled.button`
  margin-bottom: 10px;
  width: 90%;
  height: 50px;
  background-color: var(--kakao-color);
  color: var(--black);
  border: none;
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

export const NaverButton = styled.button`
  margin-bottom: 10px;
  width: 90%;
  height: 50px;
  background-color: var(--naver-color);
  color: var(--white);
  border: none;
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
