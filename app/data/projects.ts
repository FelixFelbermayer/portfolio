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
    title: "Project One",
    description:
      "A brief description of the first project and its key features.",
    imageUrl: "/HeroBackground.png",
  },
  {
    id: "2",
    title: "Project Two",
    description:
      "A brief description of the second project and its key features.",
    imageUrl: "/StoryImage.png",
  },
  {
    id: "3",
    title: "Project Three",
    description:
      "A brief description of the third project and its key features.",
    imageUrl: "/Hero.png",
  },
  {
    id: "4",
    title: "Project Four",
    description:
      "A brief description of the fourth project and its key features.",
    imageUrl: "/HeroBackground.png",
  },
  {
    id: "5",
    title: "Project Five",
    description:
      "A brief description of the fifth project and its key features.",
    imageUrl: "/StoryImage.png",
  },
  {
    id: "6",
    title: "Project Six",
    description:
      "A brief description of the sixth project and its key features.",
    imageUrl: "/Hero.png",
  },
  {
    id: "7",
    title: "Project Six",
    description:
      "A brief description of the sixth project and its key features.",
    imageUrl: "/Hero.png",
  },
];
