import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "@/data/projects";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(Number(id));

  return {
    title: project
      ? `${project.title} — Jawad Al Bdiwi`
      : "Project Not Found — Jawad Al Bdiwi",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await getProject(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h2 className="text-2xl font-bold sm:text-3xl">{project.title}</h2>
      <p className="mt-3 leading-relaxed">{project.description}</p>

      {project.techStack.length > 0 && (
        <p className="mt-4 text-sm font-semibold text-brand">
          Tech Stack: {project.techStack.join(", ")}
        </p>
      )}

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block font-semibold text-fg underline underline-offset-4 transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
        >
          View project
        </a>
      )}

      <p className="mt-6">
        <Link
          href="/projects"
          className="inline-block rounded-2xl border-2 border-alt px-4 py-2 font-semibold text-fg transition hover:bg-accent hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Back to projects
        </Link>
      </p>
    </section>
  );
}
