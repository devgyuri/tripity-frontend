import { atom } from "recoil";
import { IUserInfo } from "../types/auth/userInfo";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userInfoState",
});

export const userInfoState = atom<IUserInfo>({
  key: "userInfoState",
  default: {
    id: null,
    email: null,
    image: null,
    intro: null,
    nickname: null,
  },
  effects_UNSTABLE: [persistAtom],
});
