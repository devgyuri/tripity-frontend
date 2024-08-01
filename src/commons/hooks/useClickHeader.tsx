import { useEffect, useRef, useState } from "react";

const useClickHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenAlarm, setIsOpenAlarm] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const alarmRef = useRef<HTMLDivElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickHeader = (e: { target: any }) => {
      if (
        isOpenMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsOpenMenu(false);
      }
      if (
        isOpenAlarm &&
        alarmRef.current &&
        !alarmRef.current.contains(e.target)
      ) {
        setIsOpenAlarm(false);
      }
      if (
        isOpenChat &&
        chatRef.current &&
        !chatRef.current.contains(e.target)
      ) {
        setIsOpenChat(false);
      }

      document.addEventListener("click", handleClickHeader);

      return () => {
        document.removeEventListener("click", handleClickHeader);
      };
    };
  }, [isOpenMenu, isOpenAlarm, isOpenChat]);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleToggleAlarm = () => {
    setIsOpenAlarm(!isOpenAlarm);
  };

  const handleToggleChat = () => {
    setIsOpenChat(!isOpenChat);
  };

  return {
    menuRef,
    alarmRef,
    chatRef,
    handleToggleAlarm,
    handleToggleMenu,
    handleToggleChat,
    isOpenMenu,
    isOpenAlarm,
    isOpenChat,
  };
};

export default useClickHeader;
