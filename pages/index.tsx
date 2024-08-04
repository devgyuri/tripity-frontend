import { useToggleModal } from "../src/commons/hooks/useToggleModal";
import LayoutBody from "../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../src/components/commons/layout/header/LayoutHeader.index";

export default function Home() {
  const { isOpenModal, handleToggleModal } = useToggleModal();

  return (
    <>
      <LayoutHeader />
      <LayoutBody />
    </>
  );
}
