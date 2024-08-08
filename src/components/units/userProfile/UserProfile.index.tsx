import { useRecoilValue } from "recoil";
import {
  Content1,
  Title1,
  Title3,
} from "../../../commons/styles/content.styles";
import * as S from "./UserProfile.styles";
import { userInfoState } from "../../../commons/stores/userInfoState";
import {
  DEFAULT_PROFILE_IMAGE,
  IMAGE_URL_PREFIX,
} from "../../../commons/constant/resource";
import { LineButton } from "../../../commons/styles/button.styles";
import { useEffect, useState } from "react";
import { useToggleModal } from "../../../commons/hooks/useToggleModal";
import EditProfileForm from "../editProfileForm/EditProfileForm.index";

export default function UserProfile(): JSX.Element {
  const userInfo = useRecoilValue(userInfoState);

  const [imageUrl, setImageUrl] = useState(DEFAULT_PROFILE_IMAGE);
  const { isOpenModal, handleToggleModal } = useToggleModal();

  useEffect(() => {
    setImageUrl(
      userInfo.image ? IMAGE_URL_PREFIX + userInfo.image : DEFAULT_PROFILE_IMAGE
    );
    console.log(IMAGE_URL_PREFIX + userInfo.image);
  }, [userInfo]);

  return (
    <>
      <S.MyPageWrapper>
        <Title1>내 프로필</Title1>
        <S.ProfileWrapper>
          <S.ProfileImage url={imageUrl} />
          <S.ContentWrapper>
            <Title3>{userInfo.nickname}</Title3>
            <Content1>{userInfo.email}</Content1>
            <Content1>{userInfo.intro}</Content1>
          </S.ContentWrapper>
          <LineButton onClick={handleToggleModal}>프로필 편집</LineButton>
        </S.ProfileWrapper>
      </S.MyPageWrapper>
      {isOpenModal && (
        <S.CustomModal
          open={isOpenModal}
          onOk={handleToggleModal}
          onCancel={handleToggleModal}
        >
          <EditProfileForm />
        </S.CustomModal>
      )}
    </>
  );
}
