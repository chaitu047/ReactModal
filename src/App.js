import "./styles.css";
import Modal from "./Modal";
import { useState } from "react";
export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={handleOpen}>open modal</button>
        <Modal isOpen={showModal} handleClose={handleClose} />
      </div>
    </>
  );
}
