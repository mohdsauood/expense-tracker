import React from "react";
import styles from "./styles.module.scss";
import { Card } from "react-bootstrap";
import { getSvg } from "../../../service/getSvg";
import { addCommasToNumber } from "../../../service/addCommasToNumber";
export const TransactionCard = ({ tag, amount, date, title, type }) => {
  return (
    <Card className={styles.transactionCard}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div
            className={`${styles.iconDiv} d-flex justify-content-center align-items-center`}
          >
            {getSvg(tag)}
          </div>
          <div className={styles.detailsDiv}>
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-capitalize">{title}</p>{" "}
              <p
                className={
                  type === "income"
                    ? `${styles.incomeText}`
                    : `${styles.expenseText}`
                }
              >
                {getAmountSign(type) + addCommasToNumber(amount) + " AED"}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className={`text-capitalize ${styles.transactionTag}`}>
                {tag}
              </p>
              <p className={`text-capitalize ${styles.transactionTag}`}>
                {date}
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

function getAmountSign(tag) {
  if (tag === "expense") {
    return "-";
  } else {
    return "+";
  }
}
