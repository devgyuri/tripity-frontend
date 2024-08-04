import { useState } from "react";

export const useToggleModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    console.log("handleToggleModal");
    setIsOpenModal(!isOpenModal);
  };

  return {
    isOpenModal,
    setIsOpenModal,
    handleToggleModal,
  };
};

// export default useToggleModal;
