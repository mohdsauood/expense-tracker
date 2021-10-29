import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import { UserDetailCard } from "../userDetailCard/UserDetailCard";
import { AddTransactionModal } from "../../addTransactionModal/index/AddTransactionModal";
import { useAccount } from "../../../context/accountContext";
export const UserDetails = () => {
  const { state } = useAccount();
  const { balance, income, expense } = state;
  const [modalShow, setModalShow] = useState(false);
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
      <svg
        onClick={() => setModalShow(true)}
        className={styles.addTransactionMobileButton}
        viewBox="107.428 109.552 50 50"
        width="50"
        height="50"
        fill="rgb(58, 178, 156)"
      >
        <path d="M 132.428 109.552 C 118.622 109.552 107.428 120.745 107.428 134.552 C 107.428 148.359 118.622 159.552 132.428 159.552 C 146.234 159.552 157.428 148.359 157.428 134.552 C 157.428 120.745 146.234 109.552 132.428 109.552 Z M 144.927 136.636 L 134.51 136.636 L 134.51 147.052 L 130.346 147.052 L 130.346 136.636 L 119.929 136.636 L 119.929 132.468 L 130.346 132.468 L 130.346 122.052 L 134.51 122.052 L 134.51 132.468 L 144.927 132.468 L 144.927 136.636 Z"></path>
      </svg>
    </>
  );
};
