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
  height: 50px;
`;

export const Title = styled.img`
  height: 30px;
`;

export const MenuWrapper = styled.nav`
  margin-right: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const MenuItem = styled.div`
  width: 100px;
  padding: 10px 0;
  margin: 0px 5%;
  // border-radius: 20px;
  text-align: center;
  cursor: pointer;
  color: var(--gray);

  :hover {
    // background-color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
    color: var(--black);
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  text-align: right;
  align-items: center;
  font-weight: 500;
`;

export const Login = styled.div`
  width: 80px;
  margin-right: 30px;
  color: var(--black);
  cursor: pointer;

  :hover {
    color: var(--primary-color);
  }
`;

export const Logout = styled.div`
  width: 80px;
  margin-right: 30px;
  color: var(--black);
  cursor: pointer;

  :hover {
    color: var(--primary-color);
  }
`;

export const SignUp = styled.div`
  width: 80px;
  color: var(--black);
  cursor: pointer;

  :hover {
    color: var(--primary-color);
  }
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
