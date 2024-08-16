import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "../../../../commons/styles/button.styles";
import { NonBorderInput } from "../../../../commons/styles/input.styles";
import * as S from "./MissionWrite.styles";
import { IMissionWriteInput } from "../../../../commons/types/missions/missionWriteInput";
import { Title1 } from "../../../../commons/styles/content.styles";
import { useMission } from "../../../../commons/hooks/useMission";
import dynamic from "next/dynamic";

const TextEditor = dynamic(
  () => import("../../../commons/textEditor/TextEditor.index"),
  {
    ssr: false,
  }
);

export default function MissionWrite(): JSX.Element {
  const { createMissionMutation } = useMission();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm<IMissionWriteInput>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: IMissionWriteInput) => {
    console.log("mission write submit");
    console.log(errors.root);
    console.log(errors.title);
    console.log(errors.name);
    console.log(errors.content);

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
          <Controller
            control={control}
            name="content"
            rules={{
              required: "미션 내용을 입력해 주세요.",
              maxLength: {
                value: 1000,
                message: "최대 1000자까지 입력이 가능합니다.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextEditor
                errors={errors.content !== undefined}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <S.ButtonWrapper>
            <CustomButton
              type="submit"
              isFill={true}
              isDisabled={!isDirty || !isValid}
            >
              등록하기
            </CustomButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
