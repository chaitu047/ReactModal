import "./index.css";
import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";

export default function Modal({ isOpen, handleClose }) {
  const modalRef = useRef();
  useClickOutside(modalRef, handleClose);
  if (!isOpen) {
    return null;
  }
  return (
    <div ref={modalRef} className="modal-container">
      <span>Test Modal</span>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}
