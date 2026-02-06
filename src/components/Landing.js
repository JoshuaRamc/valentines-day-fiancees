// src/components/Landing.js
import React from "react";
import styles from "./Landing.module.css";

export default function Landing({ onYes, onNo }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h1 className={styles.title}>Will You Be My Valentine?</h1>
        <p className={styles.subtitle}>
          I made this just for you 💘
        </p>

        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.yes}`} onClick={onYes}>
            Yes
          </button>
          <button className={`${styles.btn} ${styles.no}`} onClick={onNo}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
