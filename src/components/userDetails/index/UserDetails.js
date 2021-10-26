import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import { addCommasToNumber } from "../../../service/addCommasToNumber";
import { UserDetailCard } from "../userDetailCard/UserDetailCard";
export const UserDetails = () => {
  const [userName, setUserName] = useState("sam");
  const [totalBalance, setTotalBalance] = useState("10003.07");
  const [totalIncome, setTotalIncome] = useState("14000");
  const [totalExpense, setTotalExpense] = useState("4003");
  return (
    <>
      <div className={styles.userdetailsDiv}>
        <div className="w-80 h-100 d-flex flex-column justify-content-between ">
          <h4 className="">
            Hi {userName} ! Welcome to new era of expense tracking
          </h4>
          <div className={`${styles.cardsRowOneDiv} w-100`}>
            <UserDetailCard
              text="Total Balance"
              amount={totalBalance}
              center={true}
            />
          </div>
          <div
            className={`${styles.cardsRowTwoDiv} w-100 d-flex justify-content-between align-items-center`}
          >
            <UserDetailCard
              text="Total Income"
              amount={totalIncome}
              iconColor="green"
              center={false}
            />
            <UserDetailCard
              text="Total Expense"
              amount={totalExpense}
              iconColor="red"
              center={false}
            />
            <Button className={styles.addTransactionButton}>
              Add Transaction
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
