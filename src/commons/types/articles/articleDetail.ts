import { ICommentDetail } from "../comments/commentDetail";

export interface IArticleDetail {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  comments: ICommentDetail[];
}
