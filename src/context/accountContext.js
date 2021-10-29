import * as React from "react";

const AccountContext = React.createContext();

const initialState = {
  balance: 1000,
  income: 1000,
  expense: 0,
  transactions: [
    {
      title: "salary credit",
      type: "income",
      tag: "others",
      amount: 1000,
      createdOn: "Fri Oct 29 2021 00:00:00 GMT+0400 ",
    },
  ],
};
function AccountReducer(state, action) {
  switch (action.type) {
    case "incrementIncome": {
      return { ...state, income: state.income + action.value };
    }
    case "incrementBalance": {
      return { ...state, balance: state.balance + action.value };
    }
    case "incrementExpense": {
      return { ...state, expense: state.expense + action.value };
    }
    case "decrementBalance": {
      return { ...state, balance: state.balance - action.value };
    }
    case "addTransaction": {
      return { ...state, transactions: [...state.transactions, action.value] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function AccountProvider({ children }) {
  const [state, dispatch] = React.useReducer(AccountReducer, {
    ...initialState,
  });
  const value = { state, dispatch };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
}
function useAccount() {
  const context = React.useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useAccount must be used within a AccountProvider");
  }
  return context;
}

export { AccountProvider, useAccount };
