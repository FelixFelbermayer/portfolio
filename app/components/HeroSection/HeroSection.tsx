"use client";

import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.heroSection} ${
        theme === "dark" ? styles.darkMode : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
            >
              Hi There!
            </span>
            <br />
            <span style={{ fontFamily: "'Heebo', sans-serif" }}>
              I&apos;m Felix,
            </span>{" "}
            <br />
            <span
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
            >
              <div className={styles.typingContainer}>
                <span className={styles.typedText}>a Fullstack Developer.</span>
                <span className={styles.cursor}></span>
              </div>
            </span>
          </h1>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Hero.png"
            alt="Felix Felbermayer"
            width={500}
            height={500}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
