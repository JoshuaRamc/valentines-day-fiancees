// src/components/PolaroidCard.js
import React, { useMemo } from "react";
import styles from "./PolaroidCard.module.css";

function pseudoRandomRotation(seed) {
  // Deterministic "random" rotation per index
  const x = Math.sin(seed * 999) * 10000;
  const frac = x - Math.floor(x);
  // range about [-6, 6]
  return (frac * 12 - 6).toFixed(2);
}

export default function PolaroidCard({ src, alt, index }) {
  const rotation = useMemo(() => pseudoRandomRotation(index + 1), [index]);

  const style = {
    "--rot": `${rotation}deg`,
    "--delay": `${Math.min(index * 60, 900)}ms`,
  };

  return (
    <figure className={styles.card} style={style}>
      <div className={styles.inner}>
        <img
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
          draggable="false"
        />
        <figcaption className={styles.caption}>💌</figcaption>
      </div>
    </figure>
  );
}
