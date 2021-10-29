import React from "react";
import styles from "./styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">💸 Expense Tracker </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
