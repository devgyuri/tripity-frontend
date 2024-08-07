import styled from "@emotion/styled";

interface IProfileImageProps {
  url: string;
}

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileWrapper = styled.div`
  padding: 40px;
  border: 1px solid var(--light-gray);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 20px;
  background-image: ${(props: IProfileImageProps) => `url(${props.url})`};
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
