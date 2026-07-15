export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Porfolio Page",
    description:
      "This page you're looking at - built with HTML and CSS in weeks 1 and 2.",
    techStack: ["HTML", "CSS"],
    url: "https://github.com/jivvyjams/portfolio-assignment/",
  },
  {
    id: 2,
    title: "Gradus",
    description:
      "A simple weather app built with React for HYF midterm project.",
    techStack: ["React", "Tailwind", "Vite", "Vercel"],
    url: "https://github.com/jivvyjams/gradus",
  },
  {
    id: 3,
    title: "YAPD Original Soundtrack",
    description:
      "Soundtrack I composed for an open-source, roguelike mobile game.",
    techStack: ["FL Studio", "Native Instruments", "Audacity"],
    url: "https://soundcloud.com/jivvyjams/sets/yapd-soundtrack",
  },
];

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProject(id: number): Promise<Project | undefined> {
  return projects.find((project) => project.id === id);
}
