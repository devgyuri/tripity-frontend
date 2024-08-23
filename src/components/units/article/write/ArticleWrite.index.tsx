import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "../../../../commons/styles/button.styles";
import { NonBorderInput } from "../../../../commons/styles/input.styles";
import * as S from "./ArticleWrite.styles";
import { IArticleWriteInput } from "../../../../commons/types/articles/articleWriteInput";
import { Title1 } from "../../../../commons/styles/content.styles";
import { useArticle } from "../../../../commons/hooks/useArticle";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const TextEditor = dynamic(
  () => import("../../../commons/textEditor/TextEditor.index"),
  {
    ssr: false,
  }
);

export default function ArticleWrite(): JSX.Element {
  const router = useRouter();

  const { createArticleMutation } = useArticle();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm<IArticleWriteInput>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: IArticleWriteInput) => {
    console.log("article write submit");
    console.log(errors.root);
    console.log(errors.title);
    console.log(errors.content);

    if (errors.title || errors.content) {
      alert(errors.title?.message);
      alert(errors.content?.message);
      return;
    }

    try {
      await createArticleMutation.mutateAsync(data, {
        onSuccess: (data) => {
          console.log(data);
          router.push(`/article/${data.id.toString()}`);
        },
        onError: (error: any) => {
          const errorRes = error.response;
          setError("root", {
            message: errorRes.data,
          });
        },
      });
    } catch (error) {
      console.error("create article 실패: ", error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <Title1>새 게시글 작성</Title1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <NonBorderInput
            type="text"
            placeholder="제목을 입력해 주세요."
            style={{ width: "100%" }}
            {...register("title", {
              required: "제목을 입력해 주세요.",
            })}
          />
          <Controller
            control={control}
            name="content"
            rules={{
              required: "게시글 내용을 입력해 주세요.",
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
