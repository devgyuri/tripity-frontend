import { Button } from "../../../commons/styles/button.styles";
import {
  ErrorMessage,
  Title1,
  Title2,
  Title3,
} from "../../../commons/styles/content.styles";
import * as S from "./EditProfileForm.styles";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../commons/stores/userInfoState";
import { LineInput, TextInput } from "../../../commons/styles/input.styles";
import { useEffect, useState } from "react";
import {
  DEFAULT_PROFILE_IMAGE,
  IMAGE_URL_PREFIX,
} from "../../../commons/constant/resource";
import { LineButton } from "../../../commons/styles/authInput.styles";
import { updateProfile } from "../../../commons/apis/users/updateProfile";
import { useUpdateProfile } from "../../../commons/hooks/useUpdateProfile";
import { fetchData } from "../../../commons/utils/fetchData";
import { useUploads } from "../../../commons/hooks/useUploads";

export default function EditProfileForm(): JSX.Element {
  const userInfo = useRecoilValue(userInfoState);

  const [imageUrl, setImageUrl] = useState(DEFAULT_PROFILE_IMAGE);

  const { updateProfileMutation } = useUpdateProfile();

  const { fileRef, onChangeFile, onClickUpload } = useUploads({
    setImageUrl,
  });

  useEffect(() => {
    setImageUrl(
      userInfo.image ? IMAGE_URL_PREFIX + userInfo.image : DEFAULT_PROFILE_IMAGE
    );
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<IEditProfileInput>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: IEditProfileInput) => {
    try {
      await updateProfileMutation.mutateAsync(data, {
        onSuccess: (data) => {
          console.log("profile update 성공");
        },
        onError: (error: any) => {
          const errorRes = error.response;
          setError("root", {
            message: errorRes.data,
          });
        },
      });
    } catch (error) {
      console.error("profile update 실패: ", error);
    }
  };

  const checkNicknameDuplication = async () => {
    const newNickname = getValues("nickname");

    const result = await fetchData(`/api/users/nickname/${newNickname}`);
    console.log("+++++ check nickname duplication +++++");
    console.log(result);

    if (!result) {
      setError("nickname", {
        message: "사용할 수 없는 닉네임입니다.",
      });
    }
  };

  const onClickImageRemove = () => {
    setImageUrl(DEFAULT_PROFILE_IMAGE);
  };

  return (
    <>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Title1 style={{ marginBottom: "15px" }}>내 프로필 편집</Title1>
          <S.EditWrapper>
            <S.ImageWrapper>
              <S.Image url={imageUrl} />
              <LineButton
                type="button"
                onClick={onClickUpload}
                style={{ marginBottom: "10px" }}
              >
                사진 업로드
              </LineButton>
              <S.FileInputHidden
                type="file"
                ref={fileRef}
                onChange={onChangeFile}
              />
              <LineButton type="button" onClick={onClickImageRemove}>
                사진 제거
              </LineButton>
            </S.ImageWrapper>
            <S.ContentWrapper>
              <Title3>닉네임</Title3>
              <S.NicknameWrapper>
                <LineInput
                  placeholder="닉네임을 입력해 주세요."
                  defaultValue={userInfo.nickname ?? ""}
                  aria-invalid={errors.nickname ? "true" : "false"}
                  hasError={!!errors.nickname}
                  style={{ flexGrow: "1" }}
                  {...register("nickname", {
                    required: "닉네임을 입력해 주세요.",
                  })}
                />
                <Button
                  onClick={checkNicknameDuplication}
                  style={{ minWidth: "76px" }}
                >
                  중복확인
                </Button>
              </S.NicknameWrapper>
              {errors.nickname && (
                <ErrorMessage>{errors.nickname.message}</ErrorMessage>
              )}
              <Title3>자기 소개</Title3>
              <TextInput
                placeholder="자기소개를 입력해 주세요."
                defaultValue={userInfo.intro ?? ""}
                {...register("intro", {
                  required: "자기소개를 입력해 주세요.",
                })}
              />
            </S.ContentWrapper>
          </S.EditWrapper>
          <S.ButtonWrapper>
            <Button>프로필 저장</Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
