import React from "react";
import styles from "./styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">💸 Expense Tracker </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Sign out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
