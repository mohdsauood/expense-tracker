import React from "react";
import { Card } from "react-bootstrap";
import { addCommasToNumber } from "../../../service/addCommasToNumber";
import styles from "./styles.module.scss";

export const UserDetailCard = ({ text, amount, icon }) => {
  return (
    <Card className="mx-auto money-card">
      <Card.Body className="d-flex flex-column justify-content-center">
        {!!icon && (icon == "red" ? "red svg" : "green svg")}
        <Card.Title className="text-center custom-text-gray">{text}</Card.Title>
        <Card.Text className={`${styles.fontBold} text-center`}>
          {addCommasToNumber(amount)} AED
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
