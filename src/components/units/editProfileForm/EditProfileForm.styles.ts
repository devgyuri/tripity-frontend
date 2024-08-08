import styled from "@emotion/styled";

interface IImageProps {
  url: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction; row;
  justify-content: end;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-right: 20px;
`;

export const Image = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
  background-image: ${(props: IImageProps) => `url(${props.url})`};
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
