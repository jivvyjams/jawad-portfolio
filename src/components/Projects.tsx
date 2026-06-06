import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Projects = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url?: string;
};

type ProjectsProps = {
  projects: Projects[];
};

export default function Projects({ projects }: ProjectsProps) {
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  if (projects.length === 0) {
    return <p>No projects yet.</p>;
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
    <section className="projects">
      <h2>Projects</h2>

      <input
        type="search"
        className="project-search"
        placeholder="Search by tech stack..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search projects by tech stack"
      />

      <ul className="tech-filters">
        <li className="tech-list">
          <button
            type="button"
            className={activeTech === null ? "active" : ""}
            onClick={() => setActiveTech(null)}
          >
            All
          </button>
        </li>
        {allTech.map((tech) => (
          <li className="tech-list" key={tech}>
            <button
              type="button"
              className={activeTech === tech ? "active" : ""}
              onClick={() => setActiveTech(tech)}
            >
              {tech}
            </button>
          </li>
        ))}
      </ul>

      {filteredProjects.length === 0 ? (
        <p>No projects match your filter.</p>
      ) : (
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ul>
      )}
    </section>
  );
}
