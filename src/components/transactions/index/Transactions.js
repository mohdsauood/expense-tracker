import { TransactionCard } from "../transactionCard/TransactionCard";
import styles from "./styles.module.scss";
export const Transactions = () => {
  const transactions = [
    {
      tag: "entertainment",
      amount: 400,
      date: "23 oct 2021",
      title: "etisalat elife ",
      type: "expense",
    },
    {
      tag: "grocery",
      amount: 20,
      date: "23 oct 2021",
      title: "milk",
      type: "expense",
    },
    {
      tag: "others",
      amount: 230,
      date: "23 oct 2021",
      title: "freelancing",
      type: "income",
    },
    {
      tag: "transportation",
      amount: 41,
      date: "23 oct 2021",
      title: "taxi fare ",
      type: "expense",
    },
  ];
  return (
    <>
      <div className={styles.transactionsWrapper}>
        <h5 className="mt-4">Recent Transactions</h5>
        {transactions.map((transaction) => {
          return (
            <TransactionCard
              tag={transaction.tag}
              amount={transaction.amount}
              date={transaction.date}
              title={transaction.title}
              type={transaction.type}
              key={transaction.title}
            />
          );
        })}
      </div>
      <div className="mb-5">""</div>
    </>
  );
};
