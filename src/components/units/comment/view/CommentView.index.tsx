import {
  Content1,
  Title1,
  Title2,
  Title3,
} from "../../../../commons/styles/content.styles";
import * as S from "./CommentView.style";
import { dateToFormat } from "../../../../commons/utils/dateFormat";
import { ICommentDetail } from "../../../../commons/types/comments/commentDetail";
import {
  DEFAULT_PROFILE_IMAGE,
  IMAGE_URL_PREFIX,
} from "../../../../commons/constant/resource";

interface ICommentViewProps {
  data: ICommentDetail;
}

export default function CommentView({ data }: ICommentViewProps): JSX.Element {
  console.log("comment: ", data);

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Image
            url={
              data?.userInfo?.image
                ? IMAGE_URL_PREFIX + data.userInfo.image
                : DEFAULT_PROFILE_IMAGE
            }
          ></S.Image>
          <Title3>{data?.userInfo?.nickname}</Title3>
        </S.InfoWrapper>
        <Content1>{data.content}</Content1>
      </S.Wrapper>
    </>
  );
}
