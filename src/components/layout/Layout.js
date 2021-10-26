import React from "react";
import {Header} from '../header/Header';
import { Transactions } from "../transactions/Transactions";
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
