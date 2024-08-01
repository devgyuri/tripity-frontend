import * as S from "./SelectedBox.styles";
import { Dispatch, SetStateAction, useState } from "react";

interface ISelectedBoxProps {
  menu: string[];
  placeholder: string;
  selectedItem: string | null;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  scroll?: boolean;
  disabled?: boolean;
}

const SelectedBox = ({
  menu,
  placeholder,
  selectedItem,
  setSelectedItem,
  scroll,
  disabled,
}: ISelectedBoxProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleOpen = () => {
    setIsOpened(!isOpened);
  };

  const handleSelectedItem = (item: string) => {
    setSelectedItem(item);
    setIsOpened(false);
  };

  return (
    <div>
      <button disabled={disabled} type="button" onClick={handleToggleOpen}>
        <p>{selectedItem ? selectedItem : placeholder}</p>
        {isOpened ? <S.ListDownIcon /> : <S.ListUpIcon />}
      </button>
      {isOpened && (
        <div>
          {menu.map((el, idx) => {
            <button
              key="idx"
              type="button"
              onClick={() => handleSelectedItem(el)}
            >
              {el}
            </button>;
          })}
        </div>
      )}
    </div>
  );
};

export default SelectedBox;
