import styled from "@emotion/styled";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  padding: 40px;
  height: 80px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--black);
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const HomeLogo = styled.img`
  height: 60px;
`;

export const Title = styled.img`
  height: 40px;
`;

export const MenuWrapper = styled.nav`
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: var(--black);
`;

export const MenuItem = styled.div`
  width: 200px;
  padding: 10px 20px;
  margin: 0px 5%;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: var(--primary-color);
    color: var(--white);
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  text-align: right;
  align-items: center;
`;

export const Login = styled.div`
  width: 80px;
  margin-right: 30px;
  color: var(--black);
  cursor: pointer;
`;

export const SignUp = styled.div`
  width: 80px;
  color: var(--black);
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
