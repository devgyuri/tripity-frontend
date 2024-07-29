import Link from "next/link";
import * as S from "./OAuthLogin.styles";

export default function OAuthLogin(): JSX.Element {
  const API_BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL;
  const OAUTH2_REDIRECT_URI = process.env.NEXT_PUBLIC_SNS_REDIRECT_URI;
  const GOOGLE_AUTH_URL = `${API_BASE_URI}/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
  const NAVER_AUTH_URL = `${API_BASE_URI}/oauth2/authorization/naver?redirect_uri=${OAUTH2_REDIRECT_URI}`;
  const KAKAO_AUTH_URL = `${API_BASE_URI}/oauth2/authorization/kakao?redirect_uri=${OAUTH2_REDIRECT_URI}`;

  return (
    <>
      <S.Wrapper>
        <Link href={GOOGLE_AUTH_URL}>
          <S.GoogleButton>
            <S.Icon src="/images/google.png" />
            구글로 시작하기
          </S.GoogleButton>
        </Link>
        <Link href={KAKAO_AUTH_URL}>
          <S.KakaoButton>
            <S.Icon src="/images/kakao.png" />
            카카오로 시작하기
          </S.KakaoButton>
        </Link>
        <Link href={NAVER_AUTH_URL}>
          <S.NaverButton>
            <S.Icon src="/images/naver.png" />
            네이버로 시작하기
          </S.NaverButton>
        </Link>
      </S.Wrapper>
    </>
  );
}
