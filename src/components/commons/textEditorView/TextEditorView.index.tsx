import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

interface ITextEditorViewProps {
  content: string;
}

export default function TextEditorView({
  content,
}: ITextEditorViewProps): JSX.Element {
  const modules = {
    toolbar: false,
  };

  return (
    <>
      <ReactQuill value={content} readOnly modules={modules} />
    </>
  );
}
