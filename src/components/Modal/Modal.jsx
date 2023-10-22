import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  // console.log(props)
  return ReactDOM.createPortal(
    <>
      <ModalOverlay active={props.active} onClose={props.onClose} />
      <div className={props.active ? styles.modalActive : styles.modal}>
        <div className={styles.header + " pr-10 pt-10 pl-10"}>
          <span className="text text_type_main-large">{props.header}</span>
          <CloseIcon type="primary" onClick={() => props.onClose} />
          <div className={styles.container}>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
