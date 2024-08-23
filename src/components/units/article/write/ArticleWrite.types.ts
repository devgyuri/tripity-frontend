import { IArticleDetail } from "../../../../commons/types/articles/articleDetail";

export interface IArticleWriteProps {
  defaultData?: IArticleDetail;
  isEdit?: boolean;
}
