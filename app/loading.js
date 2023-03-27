import React from "react";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.ldsring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
