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

function ProjectsPage() {
  if (projects.length === 0) {
    return <p className="text-lg">No projects yet.</p>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsPage;
