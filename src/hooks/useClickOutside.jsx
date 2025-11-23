import { useEffect } from "react";

export default function useClickOutside(modalRef, handleClose) {
  useEffect(() => {
    if (!modalRef) {
      return;
    }
    if (!handleClose) {
      return;
    }

    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current?.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
