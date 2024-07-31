import * as S from "./LayoutNavigation.styles";
import { useRecoilState } from "recoil";
import { loginState } from "../../../../commons/stores/loginState";
import { userInfoState } from "../../../../commons/stores/userInfoState";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useLogout } from "../../../../commons/hooks/useLogout";

export default function LayoutNavigation(): JSX.Element {
  const [isLogin] = useRecoilState(loginState);
  const [userInfo] = useRecoilState(userInfoState);

  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogout } = useLogout();

  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper onClick={onClickMoveToPage("/")}>
          <S.HomeLogo src="/images/logo.png" />
          <S.Title src="/images/title.png" />
        </S.LogoWrapper>
        <S.MenuWrapper>
          <S.MenuItem onClick={onClickMoveToPage("/mission")}>미션</S.MenuItem>
          <S.MenuItem onClick={onClickMoveToPage("/region")}>지역</S.MenuItem>
          <S.MenuItem onClick={onClickMoveToPage("/badge")}>뱃지</S.MenuItem>
        </S.MenuWrapper>
        <S.LoginWrapper>
          {isLogin ? (
            <>
              <S.Logout onClick={onClickLogout}>로그아웃</S.Logout>
              <S.Profile src="/images/profile.png" />
            </>
          ) : (
            <>
              <S.Login onClick={onClickMoveToPage("/login")}>로그인</S.Login>
              <S.SignUp onClick={onClickMoveToPage("/signUp")}>
                회원가입
              </S.SignUp>
            </>
          )}
        </S.LoginWrapper>
      </S.Wrapper>
    </>
  );
}
