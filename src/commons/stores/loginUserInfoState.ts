import { atom } from "recoil";
import { ILoginUserInfo } from "../types/auth/loginUserInfo";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "loginUserInfoState",
});

export const loginUserInfoState = atom<ILoginUserInfo>({
  key: "loginUserInfoState",
  default: {
    id: null,
    // role: null,
    // profileImage: null,
    nickname: null,
  },
  effects_UNSTABLE: [persistAtom],
});
