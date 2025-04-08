import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import styles from "./page.module.css";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backLink}>
        <svg
          className={styles.backIcon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to Projects
      </Link>

      <article className={styles.project}>
        <div className={styles.imageContainer}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>

          {project.technologies && (
            <div className={styles.technologies}>
              <h2>Technologies Used</h2>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {project.links && (
            <div className={styles.links}>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View on GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
