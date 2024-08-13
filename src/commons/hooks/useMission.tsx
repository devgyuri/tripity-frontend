import { useMutation, useQueryClient } from "react-query";
import { REACT_QUERY_KEY } from "../constant/reactQueryKey";
import { updateProfile } from "../apis/users/updateProfile";
import { IMissionWriteInput } from "../types/missions/missionWriteInput";
import { createMission } from "../apis/missions/createMission";

export const useMission = () => {
  const queryClient = useQueryClient();

  const createMissionMutation = useMutation({
    mutationFn: (data: IMissionWriteInput) => createMission(data),
    onSuccess: (data) => {
      // queryClient.setQueryData(REACT_QUERY_KEY.userInfo, data);
    },
    onError: (error) => {
      console.error("mission create 실패: ", error);
    },
  });

  return { createMissionMutation };
};
