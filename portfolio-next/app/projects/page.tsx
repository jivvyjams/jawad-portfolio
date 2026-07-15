import type { Metadata } from "next";
import ProjectsList from "@/components/ProjectsList";
import { getProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Jawad Al Bdiwi",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return <p className="text-lg">No projects yet.</p>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
      <ProjectsList projects={projects} />
    </section>
  );
}
