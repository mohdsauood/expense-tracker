import React, { useState } from "react";
import styles from "./styles.module.scss";
export const UserDetails = () => {
  const [userName, setUserName] = useState("sam");
  return (
    <>
      <div className={styles.userdetailsDiv}>
        <h4>Welcome {userName}</h4>
      </div>
    </>
  );
};
