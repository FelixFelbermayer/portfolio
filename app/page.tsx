import styles from "./page.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}
