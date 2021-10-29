import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import { UserDetailCard } from "../userDetailCard/UserDetailCard";
import { AddTransactionModal } from "../../addTransactionModal/index/AddTransactionModal";
import { useAccount } from "../../../context/accountContext";
export const UserDetails = () => {
  const { state } = useAccount();
  const { balance, income, expense } = state;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className={styles.userdetailsDiv}>
        <div className="w-80 h-100 d-flex flex-column justify-content-between ">
          <h5 className="mt-3">Hi ! Welcome to new era of expense tracking</h5>
          <div className={` w-100 mt-2`}>
            <UserDetailCard
              text="Total Balance"
              amount={balance}
              center={true}
            />
          </div>
          <div
            className={`w-100 d-flex justify-content-between align-items-center mt-3`}
          >
            <div
              className={`d-flex justify-content-between w-50 ${styles.expenseIncomeCardsDiv}`}
            >
              <UserDetailCard
                text="Total Income"
                amount={income}
                iconColor="green"
                center={false}
              />
              <UserDetailCard
                text="Total Expense"
                amount={expense}
                iconColor="red"
                center={false}
              />
            </div>
            <Button
              className={styles.addTransactionButton}
              onClick={() => setModalShow(true)}
            >
              Add Transaction
            </Button>
          </div>
        </div>
      </div>
      <AddTransactionModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
