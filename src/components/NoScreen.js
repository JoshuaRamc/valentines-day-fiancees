// src/components/NoScreen.js
import React from "react";
import styles from "./NoScreen.module.css";

export default function NoScreen({ onBack }) {
  const imagePath = `${process.env.PUBLIC_URL}/bugging.JPEG`;

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h2 className={styles.title}>you're doing too much (you're bugging) 😅💔</h2>

        <div className={styles.media}>
          <img
            className={styles.image}
            src={imagePath}
            alt="Playful bugging illustration"
            loading="eager"
          />
        </div>

        <button className={styles.back} onClick={onBack}>
          Go back 🥺💕
        </button>
      </div>
    </div>
  );
}
