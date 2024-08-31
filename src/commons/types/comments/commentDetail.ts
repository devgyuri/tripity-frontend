import { IUserInfo } from "../users/userInfo";

export interface ICommentDetail {
  id: number;
  content: string;
  createdAt: string;
  articleId: number;
  userInfo: IUserInfo;
}
