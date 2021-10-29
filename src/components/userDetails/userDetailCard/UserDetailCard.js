import React from "react";
import { Card } from "react-bootstrap";
import { addCommasToNumber } from "../../../service/addCommasToNumber";
import styles from "./styles.module.scss";

export const UserDetailCard = ({ text, amount, iconColor, center }) => {
  return (
    <Card
      className={`${
        center ? `${styles.totalBalanceCard} mx-auto` : ""
      } money-card`}
    >
      <Card.Body className="d-flex flex-column justify-content-center">
        {!!iconColor &&
          (iconColor === "green" ? (
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
        {iconColor === undefined && (
          <svg
            viewBox="159.935 37.292 28.939 25.321"
            width="28.939"
            height="25.321"
          >
            <path
              fill="#3ab29c"
              d="M 186.002 42.718 L 164.457 42.718 C 163.957 42.718 163.552 42.313 163.552 41.814 C 163.552 41.314 163.957 40.909 164.457 40.909 L 186.161 40.909 C 186.66 40.909 187.065 40.505 187.065 40.005 C 187.065 38.507 185.85 37.292 184.352 37.292 L 163.552 37.292 C 161.554 37.292 159.935 38.911 159.935 40.909 L 159.935 58.996 C 159.935 60.994 161.554 62.613 163.552 62.613 L 186.002 62.613 C 187.586 62.613 188.874 61.396 188.874 59.9 L 188.874 45.431 C 188.874 43.935 187.586 42.718 186.002 42.718 Z M 183.448 54.474 C 182.449 54.474 181.639 53.664 181.639 52.666 C 181.639 51.667 182.449 50.857 183.448 50.857 C 184.446 50.857 185.256 51.667 185.256 52.666 C 185.256 53.664 184.446 54.474 183.448 54.474 Z"
            ></path>
          </svg>
        )}
        <Card.Title
          className={`${styles.cardTitle} text-center custom-text-gray`}
        >
          {text}
        </Card.Title>
        <Card.Text
          className={`${styles.fontBold} ${styles.cardText} text-center`}
        >
          {!!iconColor && (iconColor === "green" ? "+" : "-")}
          {addCommasToNumber(amount)} AED
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
