import { Button } from "../../../commons/styles/button.styles";
import { Title1, Title2, Title3 } from "../../../commons/styles/content.styles";
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

export default function EditProfileForm(): JSX.Element {
  const userInfo = useRecoilValue(userInfoState);

  const [imageUrl, setImageUrl] = useState(DEFAULT_PROFILE_IMAGE);

  useEffect(() => {
    setImageUrl(
      userInfo.image ? IMAGE_URL_PREFIX + userInfo.image : DEFAULT_PROFILE_IMAGE
    );
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IEditProfileInput>({
    mode: "onChange",
    criteriaMode: "all",
  });

  return (
    <>
      <S.Wrapper>
        <Title1 style={{ marginBottom: "15px" }}>내 프로필 편집</Title1>
        <S.EditWrapper>
          <S.ImageWrapper>
            <S.Image url={imageUrl} />
            <LineButton style={{ marginBottom: "10px" }}>
              사진 업로드
            </LineButton>
            <LineButton>사진 제거</LineButton>
          </S.ImageWrapper>
          <S.ContentWrapper>
            <Title3>닉네임</Title3>
            <S.NicknameWrapper>
              <LineInput
                placeholder="닉네임을 입력해 주세요."
                defaultValue={userInfo.nickname ?? ""}
                hasError={false}
                style={{ flexGrow: "1" }}
              />
              <Button style={{ minWidth: "76px" }}>중복확인</Button>
            </S.NicknameWrapper>
            <Title3>자기 소개</Title3>
            <TextInput
              placeholder="자기소개를 입력해 주세요."
              defaultValue={userInfo.intro ?? ""}
            />
          </S.ContentWrapper>
        </S.EditWrapper>
        <S.ButtonWrapper>
          <Button>프로필 저장</Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
