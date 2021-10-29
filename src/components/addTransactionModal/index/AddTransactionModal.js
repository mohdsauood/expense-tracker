import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./styles.module.scss";
import { AddTransactionForm } from "../addTransactionForm/AddTransactionForm";
export const AddTransactionModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <AddTransactionForm closeModal={props.onHide} />
      </Modal.Body>
    </Modal>
  );
};
