import { axiosAccessFunc } from "..";
import { IMissionWriteInput } from "../../types/missions/missionWriteInput";

const axiosAccess = axiosAccessFunc();

export const createMission = async (formData: IMissionWriteInput) => {
  try {
    const res = await axiosAccess({
      method: "post",
      url: "/api/missions",
      data: formData,
    });
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
};
