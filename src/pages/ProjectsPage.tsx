import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Project = {
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
    url: "https://github.com/jivvyjams/portfolio-assignment/tree/week-4#",
  },
  {
    id: 2,
    title: "Desktop Environment",
    description:
      "Custom configured Linux desktop environment utilizing a minimal tiling window manager.",
    techStack: ["Arch Linux", "SwayWM", "Foot", "Dunst", "Cliphist", "Neovim"],
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

function ProjectCard({ title, description, techStack, url }: Project) {
  return (
    <li className="flex flex-col rounded-2xl border-2 border-alt bg-fg p-6 text-bg shadow-card">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 flex-1 leading-relaxed">{description}</p>

      {techStack.length > 0 && (
        <p className="mt-4 text-sm font-semibold text-brand">
          Tech Stack: {techStack.join(", ")}
        </p>
      )}

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block self-start rounded-2xl px-3 py-1 font-semibold text-bg underline underline-offset-4 transition hover:bg-accent hover:text-fg hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg"
        >
          View project
        </a>
      )}
    </li>
  );
}

export default function ProjectsPage() {
  useDocumentTitle("Projects — Jawad Al Bdiwi");

  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  if (projects.length === 0) {
    return <p className="text-lg">No projects yet.</p>;
  }

  const allTech = [
    ...new Set(projects.flatMap((project) => project.techStack)),
  ].sort();

  const query = search.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      !query ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query));
    const matchesTech = !activeTech || project.techStack.includes(activeTech);
    return matchesSearch && matchesTech;
  });

  return (
    <section>
      <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>

      <input
        type="search"
        placeholder="Search by tech stack..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-6 w-full rounded-2xl border-2 border-alt bg-fg/10 px-4 py-2 text-fg placeholder:text-fg/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      />

      <ul className="mt-4 flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            onClick={() => setActiveTech(null)}
            className={`rounded-2xl border-2 border-alt px-3 py-1 text-sm font-semibold transition hover:bg-accent hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
              activeTech === null ? "bg-brand text-fg" : "text-fg"
            }`}
          >
            All
          </button>
        </li>
        {allTech.map((tech) => (
          <li key={tech}>
            <button
              type="button"
              onClick={() => setActiveTech(tech)}
              className={`rounded-2xl border-2 border-alt px-3 py-1 text-sm font-semibold transition hover:bg-accent hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                activeTech === tech ? "bg-brand text-fg" : "text-fg"
              }`}
            >
              {tech}
            </button>
          </li>
        ))}
      </ul>

      {filteredProjects.length === 0 ? (
        <p className="mt-6 text-lg">No projects match your filter.</p>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ul>
      )}
    </section>
  );
}
