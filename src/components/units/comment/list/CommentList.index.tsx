import {
  Content1,
  Title1,
  Title2,
} from "../../../../commons/styles/content.styles";
import * as S from "./CommentList.style";
import { dateToFormat } from "../../../../commons/utils/dateFormat";
import { ICommentDetail } from "../../../../commons/types/comments/commentDetail";
import CommentView from "../view/CommentView.index";

interface ICommentListProps {
  data: ICommentDetail[];
}

export default function CommentList({ data }: ICommentListProps): JSX.Element {
  console.log("comment: ", data);

  return (
    <>
      {data?.map((el) => {
        return (
          <>
            <CommentView data={el} />
            <S.Divider />
          </>
        );
      })}
    </>
  );
}
