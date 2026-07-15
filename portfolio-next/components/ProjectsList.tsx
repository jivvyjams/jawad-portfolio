"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

function ProjectCard({ id, title, description, techStack, url }: Project) {
  return (
    <li className="flex flex-col rounded-2xl border-2 border-alt bg-fg p-6 text-bg shadow-card">
      <h3 className="text-xl font-bold">
        <Link
          href={`/projects/${id}`}
          className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg"
        >
          {title}
        </Link>
      </h3>
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

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);

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
    <>
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
    </>
  );
}
