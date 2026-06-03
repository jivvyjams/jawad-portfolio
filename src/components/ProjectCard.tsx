type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  url?: string;
};

function ProjectCard({ title, description, techStack, url }: ProjectCardProps) {
  return (
    <li className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {techStack.length > 0 && <p>Tech Stack: {techStack.join(", ")}</p>}

      {url && (
        <a href={url} target="_blank">
          View project
        </a>
      )}
    </li>
  );
}

export default ProjectCard;
