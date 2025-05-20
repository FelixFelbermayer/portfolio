"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };

    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsImageVisible(true);
        imageObserver.disconnect();
      }
    }, options);

    const contentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsContentVisible(true);
        contentObserver.disconnect();
      }
    }, options);

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div
          ref={imageRef}
          className={`${styles.imageContainer} ${
            isImageVisible ? styles.animate : ""
          }`}
        >
          <Image
            src="/Story.png"
            alt="Felix Felbermayer"
            width={400}
            height={400}
            className={styles.storyImage}
            priority
          />
        </div>

        <div
          ref={contentRef}
          className={`${styles.contentContainer} ${
            isContentVisible ? styles.animate : ""
          }`}
        >
          <h3 className={styles.heading}>
            <strong>Who am I?</strong>
          </h3>

          <p className={styles.subtitle}>
            I&apos;m a Software engineer focusing on improving web applications.
          </p>

          <div className={styles.description}>
            <p>
              With a Master&apos;s degree in Web Development, I bring a solid
              foundation of knowledge and practical experience to every project
              I undertake. My expertise lies in creating responsive,
              user-friendly applications using modern technologies.
            </p>
            <p>
              I primarily work with React and Next.js for frontend development,
              crafting intuitive user interfaces with clean, maintainable code.
              On the backend, I&apos;m proficient with NestJS and other Node.js
              frameworks, ensuring robust and scalable server-side solutions.
            </p>
            <p>
              My approach combines technical excellence with a focus on
              delivering real value through thoughtful design and
              implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
