import { TransactionCard } from "../transactionCard/TransactionCard";
import styles from "./styles.module.scss";
import { useAccount } from "../../../context/accountContext";
export const Transactions = () => {
  const { state } = useAccount();
  const { transactions } = state;
  return (
    <>
      <div className={styles.transactionsWrapper}>
        <h5 className="mt-4">Recent Transactions</h5>
        {transactions.map((transaction) => {
          return (
            <TransactionCard
              tag={transaction.tag}
              amount={transaction.amount}
              createdOn={transaction.createdOn}
              title={transaction.title}
              type={transaction.type}
              key={transaction.title}
            />
          );
        })}
      </div>
      <div className="mb-5"></div>
    </>
  );
};
