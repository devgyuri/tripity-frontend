import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "loginState",
});

export const loginUserInfoState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
