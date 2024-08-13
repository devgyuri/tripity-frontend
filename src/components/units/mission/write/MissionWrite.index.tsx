import { useForm } from "react-hook-form";
import { Button } from "../../../../commons/styles/button.styles";
import {
  NonBorderInput,
  TextInput,
} from "../../../../commons/styles/input.styles";
import * as S from "./MissionWrite.styles";
import { IMissionWriteInput } from "../../../../commons/types/missions/missionWriteInput";
import { Title1 } from "../../../../commons/styles/content.styles";
import { useMission } from "../../../../commons/hooks/useMission";

export default function MissionWrite(): JSX.Element {
  const { createMissionMutation } = useMission();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IMissionWriteInput>({
    mode: "onSubmit",
    criteriaMode: "all",
  });

  const onSubmit = async (data: IMissionWriteInput) => {
    if (errors.title || errors.name || errors.content) {
      alert(errors.title?.message);
      alert(errors.name?.message);
      alert(errors.content?.message);
      return;
    }

    try {
      await createMissionMutation.mutateAsync(data, {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error: any) => {
          const errorRes = error.response;
          setError("root", {
            message: errorRes.data,
          });
        },
      });
    } catch (error) {
      console.error("create mission 실패: ", error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <Title1>새 미션 작성</Title1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <NonBorderInput
            type="text"
            placeholder="제목을 입력해 주세요."
            style={{ width: "100%" }}
            {...register("title", {
              required: "제목을 입력해 주세요.",
            })}
          />
          <NonBorderInput
            type="text"
            placeholder="미션명을 입력해 주세요."
            style={{ width: "100%" }}
            {...register("name", {
              required: "미션명을 입력해 주세요.",
            })}
          />
          <TextInput
            placeholder="내용을 입력해 주세요."
            style={{ width: "100%" }}
            {...register("content", {
              required: "내용을 입력해 주세요.",
            })}
          />
          <S.ButtonWrapper>
            <Button>등록하기</Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
