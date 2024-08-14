import { useMemo, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

const MAX_SIZE_IN_BYTES = 10 * 1024 * 1024;

interface ITextEditorProps {
  value?: string;
  onChange: () => void;
  errors?: boolean;
}

export default function TextEditor({
  value,
  onChange,
  errors,
}: ITextEditorProps): JSX.Element {
  const theme = "snow";

  const placeholder = "미션 세부내용을 작성해 주세요.";

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "-1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        // handlers: {
        //   image: imageHandler,
        // },
      },
    };
  }, []);

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  // const quillRef = useRef<any>(null);
  const { quillRef } = useQuill({ theme, modules, formats, placeholder });
  const [uploaded, setUploaded] = useState(false);

  const imageHandler = async () => {
    let quill = quillRef.current?.getEditor();
    const editorHtml = quill?.root.innerHTML;
    if (editorHtml.includes("<img")) {
      setUploaded(true);
      alert("이미지는 1개까지 업로드할 수 있어요.");
      return;
    }
    if (uploaded) {
      alert("이미지는 1개까지 업로드할 수 있어요.");
      return;
    }

    const input = document.createElement("input");
    const formData = new FormData();
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        const selectedFile = file[0];
        if (selectedFile.size > MAX_SIZE_IN_BYTES) {
          alert("용량이 너무 큽니다.");
          return;
        }
        formData.append("image", selectedFile);
      }

      // image upload logic
    };
  };

  return (
    <>
      <div ref={quillRef} onChange={onChange}></div>
    </>
  );
}
