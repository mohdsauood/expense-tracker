import React from "react";
import { Header } from "../header/Header";
import { Transactions } from "../transactions/index/Transactions";
import { UserDetails } from "../userDetails/index/UserDetails";
export const Layout = () => {
  return (
    <>
      <Header />
      <UserDetails />
      <Transactions />
    </>
  );
};
