// src/components/YesGallery.js
import React, { useMemo, useState, useEffect } from "react";
import styles from "./YesGallery.module.css";
import MasonryGrid from "./MasonryGrid";
import PolaroidCard from "./PolaroidCard";

const VALENTINES_DAY = new Date(2026, 1, 14); // February 14, 2026

// Hardcoded image list
const IMAGE_FILES = [
  "IMG_0102.JPEG",
  "IMG_0266.JPEG",
  "IMG_0867.JPEG",
  "IMG_0885.JPEG",
  "IMG_0917.JPEG",
  "IMG_1112.JPEG",
  "IMG_1321.JPEG",
  "IMG_1752.JPEG",
  "IMG_1901.JPEG",
  "IMG_1935.JPEG",
  "IMG_2006.JPEG",
  "IMG_2090.JPEG",
  "IMG_2946.JPEG",
  "IMG_3433.JPEG",
  "IMG_3476.JPEG",
  "IMG_3497.JPEG",
  "IMG_3577.JPEG",
  "IMG_3949.JPEG",
  "IMG_4186.JPEG",
  "IMG_4196.JPEG",
  "IMG_7286.JPEG",
  "IMG_7647.JPEG",
  "IMG_9198.JPEG",
  "IMG_9505.JPEG",
  "IMG_9520.JPEG",
  "IMG_9706.JPEG",
];

export default function YesGallery({ onBack }) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = VALENTINES_DAY - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pictures = useMemo(() => {
    return IMAGE_FILES.map((name) => ({
      name,
      // process.env.PUBLIC_URL will be "/valentines-day" based on package.json homepage
      // This ensures images load correctly both locally and on GitHub Pages
      src: `${process.env.PUBLIC_URL}/pictures/${encodeURIComponent(name)}`,
    }));
  }, []);

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>💖 Valentine's Day Countdown 💖</h1>
            <div className={styles.countdownContainer}>
              <div className={styles.countdownUnit}>
                <div className={styles.countdownValue}>{countdown.days}</div>
                <div className={styles.countdownLabel}>Days</div>
              </div>
              <div className={styles.countdownSeparator}>:</div>
              <div className={styles.countdownUnit}>
                <div className={styles.countdownValue}>{String(countdown.hours).padStart(2, "0")}</div>
                <div className={styles.countdownLabel}>Hours</div>
              </div>
              <div className={styles.countdownSeparator}>:</div>
              <div className={styles.countdownUnit}>
                <div className={styles.countdownValue}>{String(countdown.minutes).padStart(2, "0")}</div>
                <div className={styles.countdownLabel}>Minutes</div>
              </div>
              <div className={styles.countdownSeparator}>:</div>
              <div className={styles.countdownUnit}>
                <div className={styles.countdownValue}>{String(countdown.seconds).padStart(2, "0")}</div>
                <div className={styles.countdownLabel}>Seconds</div>
              </div>
            </div>
          </div>
          <button className={styles.back} onClick={onBack}>
            ← Back
          </button>
        </div>
        <p className={styles.note}>
          ✨ Special moments waiting for you... ✨
        </p>
      </header>

      <MasonryGrid>
        {pictures.map((p, idx) => (
          <PolaroidCard key={p.name} src={p.src} alt={p.name} index={idx} />
        ))}
      </MasonryGrid>
    </div>
  );
}
