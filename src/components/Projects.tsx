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

function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) {
    return <p>No projects yet.</p>;
  }

  return (
    <section className="projects">
      <h2>Projects</h2>

      <ul className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
