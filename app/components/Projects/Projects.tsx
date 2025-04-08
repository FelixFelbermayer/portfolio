"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import { projects } from "@/app/data/projects";

export default function Projects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const seeAllRef = useRef<HTMLAnchorElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Get only the first 6 projects
  const displayedProjects = projects.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    if (seeAllRef.current) {
      observer.observe(seeAllRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      if (seeAllRef.current) {
        observer.unobserve(seeAllRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.projects}>
      <h2 ref={headingRef} className={styles.heading}>
        My Projects
      </h2>
      <div className={styles.grid}>
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={styles.card}
          >
            <Link href={`/projects/${project.id}`} className={styles.cardLink}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/projects" className={styles.seeAll} ref={seeAllRef}>
        See all projects
        <svg
          className={styles.arrow}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
