"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Felbermayer Logo"
              width={250}
              height={250}
              quality={100}
              className={styles.logoImage}
            />
          </Link>
        </div>

        {isMobile ? (
          <>
            <div className={styles.mobileButtons}>
              <button
                className={`${styles.burgerMenu} ${
                  isMenuOpen ? styles.open : ""
                }`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <nav
              className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}
            >
              <ul>
                <li>
                  <Link href="/projects" onClick={toggleMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
                <li onClick={toggleMenu}>
                  <a
                    href="Lebenslauf.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </li>
                <button
                  className={styles.themeToggle}
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } mode`}
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
              </ul>
            </nav>
          </>
        ) : (
          <nav className={styles.desktopNav}>
            <ul>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <a
                  href="Lebenslauf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <button
                  className={styles.themeToggle}
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } mode`}
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
