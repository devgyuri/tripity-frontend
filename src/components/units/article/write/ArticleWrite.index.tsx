import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "../../../../commons/styles/button.styles";
import { NonBorderInput } from "../../../../commons/styles/input.styles";
import * as S from "./ArticleWrite.styles";
import { IArticleWriteInput } from "../../../../commons/types/articles/articleWriteInput";
import { Title1 } from "../../../../commons/styles/content.styles";
import { useArticle } from "../../../../commons/hooks/useArticle";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { IArticleWriteProps } from "./ArticleWrite.types";
import { useEffect } from "react";

const TextEditor = dynamic(
  () => import("../../../commons/textEditor/TextEditor.index"),
  {
    ssr: false,
  }
);

export default function ArticleWrite({
  defaultData,
  isEdit,
}: IArticleWriteProps): JSX.Element {
  const router = useRouter();

  const { createArticleMutation, updateArticleMutation } = useArticle();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm<IArticleWriteInput>({
    mode: "onChange",
    defaultValues: {
      title: defaultData?.title,
      content: defaultData?.content,
    },
  });

  console.log(defaultData);

  const onSubmit = async (data: IArticleWriteInput) => {
    console.log("article write submit");
    console.log(errors.root);
    console.log(errors.title);
    console.log(errors.content);

    if (errors.title) {
      alert(errors.title?.message);
      return;
    }

    if (errors.content) {
      alert(errors.content?.message);
      return;
    }

    const writeData: IArticleWriteInput = {
      ...data,
    };

    try {
      if (isEdit) {
        const articleId = Number(router.query.articleId);
        await updateArticleMutation.mutateAsync({
          articleId,
          updateData: writeData,
        });
        router.push(`/article/${articleId.toString()}`);
      } else {
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
      }
    } catch (error) {
      console.error("article 수정 혹은 생성 실패: ", error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <Title1>{isEdit ? "게시글 수정" : "새 게시글 작성"}</Title1>
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
              {isEdit ? "수정하기" : "등록하기"}
            </CustomButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
