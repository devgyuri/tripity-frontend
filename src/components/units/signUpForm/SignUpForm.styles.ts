import styled from "@emotion/styled";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignUpForm = styled(Form)``;

export const SignUpFormItem = styled(Form.Item)``;

export const SignUpButton = styled(Button)``;

export const SignUpInput = styled(Input)``;

export const UserIcon = styled(UserOutlined)``;

export const LockIcon = styled(LockOutlined)``;
