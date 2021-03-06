import React from "react";
import { AccountProvider } from "../../context/accountContext";
import { Header } from "../header/Header";
import { Transactions } from "../transactions/index/Transactions";
import { UserDetails } from "../userDetails/index/UserDetails";
export const Layout = () => {
  return (
    <>
      <AccountProvider>
        <Header />
        <UserDetails />
        <Transactions />
      </AccountProvider>
    </>
  );
};
