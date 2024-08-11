import { useMutation, useQueryClient } from "react-query";
import { ILoginInput } from "../types/auth/loginInput";
import { logIn } from "../apis/auth/logIn";
import { REACT_QUERY_KEY } from "../constant/reactQueryKey";
import { useSetRecoilState } from "recoil";
import { postRefreshToken } from "../apis/auth/postRefreshToken";
import { userInfoState } from "../stores/userInfoState";
import { loginState } from "../stores/loginState";
import { updateProfile } from "../apis/users/updateProfile";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const setUserInfo = useSetRecoilState(userInfoState);

  const updateProfileMutation = useMutation({
    mutationFn: (data: IEditProfileInput) => updateProfile(data),
    onSuccess: (data) => {
      queryClient.setQueryData(REACT_QUERY_KEY.userInfo, data);
      setUserInfo(data);
    },
    onError: (error) => {
      console.error("login 실패: ", error);
    },
  });

  return { updateProfileMutation };
};
