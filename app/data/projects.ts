export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Redsign ÖH-Website",
    description: "A redesign of the old Homepage of the students union.",
    imageUrl: "/ÖH.png",
    technologies: ["Next.js", "Docker", "WP-Graphql", "React"],
    links: { demo: "https://www.oeh-fh-salzburg.at/" },
  },
  {
    id: "2",
    title: "Pixed.cloud",
    description: "An easy to use photo sharing plattform.",
    imageUrl: "/Pixed.png",
    technologies: [
      "React.js",
      "AWS Services: S3, Cognito, Lambda, DynamoBD",
      "Cypress E2E",
      "Amplify",
    ],
    links: { demo: "https://pixed.cloud" },
  },
  {
    id: "3",
    title: "Vibanise",
    description:
      "A organising dashboard to keep track of daily tasks and your goals.",
    imageUrl: "/vibanise.png",
    technologies: ["Next.js", "Coolify", "MySQL", "Prisma", "Better Auth"],
    links: { demo: "https://vibanise.felbermayer.dev" },
  },
];
