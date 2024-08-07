import * as S from "./LayoutHeader.styles";
import { useRecoilState } from "recoil";
import { loginState } from "../../../../commons/stores/loginState";
import { userInfoState } from "../../../../commons/stores/userInfoState";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useLogout } from "../../../../commons/hooks/useLogout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NAV_LIST } from "../../../../commons/constant/navList";
import Link from "next/link";
import UserMenu from "./userMenu/UserMenu.index";
import useClickHeader from "../../../../commons/hooks/useClickHeader";
import LoginForm from "../../../units/loginForm/LoginForm.index";
import { useToggleModal } from "../../../../commons/hooks/useToggleModal";
import SignUpForm from "../../../units/signUpForm/SignUpForm.index";
import {
  DEFAULT_PROFILE_IMAGE,
  IMAGE_URL_PREFIX,
} from "../../../../commons/constant/resource";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const [isLogin] = useRecoilState(loginState);
  const [userInfo] = useRecoilState(userInfoState);

  const [selectedNav, setSelectedNav] = useState(0);
  const [isLoginModal, setIsLoginModal] = useState(true);
  const [profileImage, setProfileImage] = useState("");

  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogout } = useLogout();
  const { menuRef, handleToggleMenu, isOpenMenu } = useClickHeader();

  const { isOpenModal, handleToggleModal } = useToggleModal();

  useEffect(() => {
    NAV_LIST.forEach((el) => {
      if (router.pathname.includes(el.path)) {
        setSelectedNav(el.idx);
      }
    });
  }, [router]);

  useEffect(() => {
    setProfileImage(userInfo.image ?? "");
    console.log(IMAGE_URL_PREFIX + userInfo.image);
  }, [userInfo]);

  return (
    <>
      <S.Wrapper>
        <Link href="/">
          <S.LogoWrapper>
            <S.HomeLogo src="/images/logo.png" />
            <S.Title src="/images/title.png" />
          </S.LogoWrapper>
        </Link>
        <S.MenuWrapper>
          {NAV_LIST.map((el) => {
            return (
              <Link key={el.idx} href={el.path}>
                <S.MenuItem isSelected={el.idx === selectedNav}>
                  <S.MenuText>{el.name}</S.MenuText>
                </S.MenuItem>
              </Link>
            );
          })}
        </S.MenuWrapper>
        {isLogin ? (
          <S.UserWrapper>
            <UserMenu />
            <S.ProfileWrapper ref={menuRef} onClick={handleToggleMenu}>
              <S.Profile
                src={
                  profileImage
                    ? IMAGE_URL_PREFIX + profileImage
                    : DEFAULT_PROFILE_IMAGE
                }
              />
            </S.ProfileWrapper>
          </S.UserWrapper>
        ) : (
          <S.UserWrapper>
            <S.Login
              onClick={() => {
                setIsLoginModal(true);
                handleToggleModal();
              }}
            >
              로그인
            </S.Login>
            <S.SignUp
              onClick={() => {
                setIsLoginModal(false);
                handleToggleModal();
              }}
            >
              회원가입
            </S.SignUp>
          </S.UserWrapper>
        )}
      </S.Wrapper>
      {isOpenMenu && (
        <S.DropDownWrapper>
          <S.ListWrapper>
            <Link href={"/myPage"}>
              <S.ListItem>마이페이지</S.ListItem>
            </Link>
            <S.ListItem onClick={onClickLogout(handleToggleMenu)}>
              로그아웃
            </S.ListItem>
          </S.ListWrapper>
        </S.DropDownWrapper>
      )}
      {isOpenModal && (
        <S.CustomModal
          open={isOpenModal}
          onOk={handleToggleModal}
          onCancel={handleToggleModal}
        >
          {isLoginModal ? <LoginForm /> : <SignUpForm />}
        </S.CustomModal>
      )}
    </>
  );
}
