import React from "react";
import { Card } from "react-bootstrap";
import { addCommasToNumber } from "../../../service/addCommasToNumber";
import styles from "./styles.module.scss";

export const UserDetailCard = ({ text, amount, iconColor, center }) => {
  return (
    <Card className={`${center && "mx-auto"} money-card`}>
      <Card.Body className="d-flex flex-column justify-content-center">
        {!!iconColor &&
          (iconColor == "green" ? (
            <svg
              fill={iconColor}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm18-1h-4v7h-4v-7h-4l6-6 6 6z" />
            </svg>
          ) : (
            <svg
              fill={iconColor}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-17 1h4v-8h2v8h4l-5 6-5-6z" />
            </svg>
          ))}
        <Card.Title className="text-center custom-text-gray">{text}</Card.Title>
        <Card.Text className={`${styles.fontBold} text-center`}>
          {addCommasToNumber(amount)} AED
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
