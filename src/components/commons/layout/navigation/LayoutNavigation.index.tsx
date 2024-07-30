import * as S from "./LayoutNavigation.styles";
import { useRecoilState } from "recoil";
import { loginState } from "../../../../commons/stores/loginState";
import { userInfoState } from "../../../../commons/stores/userInfoState";

export default function LayoutNavigation(): JSX.Element {
  const isLogin = useRecoilState(loginState);
  const userInfo = useRecoilState(userInfoState);

  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.HomeLogo src="/images/logo.png" />
          <S.Title src="/images/title.png" />
        </S.LogoWrapper>
        <S.MenuWrapper>
          <S.MenuItem>미션</S.MenuItem>
          <S.MenuItem>지역</S.MenuItem>
          <S.MenuItem>뱃지</S.MenuItem>
        </S.MenuWrapper>
        <S.LoginWrapper>
          {isLogin ? (
            <S.Profile src="/images/profile.jpg" />
          ) : (
            <>
              <S.Login>로그인</S.Login>
              <S.SignUp>회원가입</S.SignUp>
            </>
          )}
        </S.LoginWrapper>
      </S.Wrapper>
    </>
  );
}
