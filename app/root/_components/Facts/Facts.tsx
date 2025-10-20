import React from "react";
import styles from "./Facts.module.css";
export const Facts = ({ pText }: { pText: string }) => {
  return (
    <div className={styles.Facts}>
      <h6>do you know</h6>
      <p>{pText}</p>
    </div>
  );
};
export default Facts;
