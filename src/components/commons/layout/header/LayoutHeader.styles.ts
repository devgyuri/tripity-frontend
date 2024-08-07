import styled from "@emotion/styled";
import { ILayoutHeaderMenuItemProps } from "./LayoutHeader.types";
import { Modal } from "antd";

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
  border-bottom: 1px solid var(--light-gray);
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
  height: inherit;
  margin-right: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

export const MenuItem = styled.div`
  width: 100px;
  height: inherit;
  margin: 0px 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // text-align: center;
  cursor: pointer;
  color: ${(props: ILayoutHeaderMenuItemProps) =>
    props.isSelected ? "var(--primary-color)" : "var(--black)"};
  border-bottom: ${(props: ILayoutHeaderMenuItemProps) =>
    props.isSelected
      ? "3px solid var(--primary-color)"
      : "3px solid var(--white)"};

  :hover {
    color: var(--primary-color);
  }
`;

export const MenuText = styled.p``;

export const UserWrapper = styled.div`
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

export const ProfileWrapper = styled.div`
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const DropDownWrapper = styled.div`
  // margin-top: 80px;
  // display: flex;
  // flex-direction: row;
  // justify-content: end;
  position: fixed;
  top: 81px;
  right: 50px;
  // width: 100%;
  z-index: 2;
  overflow: hidden;
  background-color: transparent;
`;

export const ListWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: var(--white);
`;

export const ListItem = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  color: var(--black);
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: var(--primary-color);
  }
`;

export const CustomModal = styled(Modal)`
  padding-top: 20px;
`;
