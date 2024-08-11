import { useMutation } from "react-query";
import { uploadImage } from "../apis/users/uploadImage";

export const useUploadImage = () => {
  const uploadImageMutation = useMutation({
    mutationFn: (data: FormData) => uploadImage(data),
    onSuccess: (data) => {
      console.log("이미지 업로드 성공");
    },
    onError: (error) => {
      console.error("이미지 업로드 실패: ", error);
    },
  });

  return { uploadImageMutation };
};
