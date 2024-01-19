import projectList from "../utils/projectList";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // pic, title, body, source, site
  return (
    <div className="p-4">
      <h1>Projects</h1>
      <div className="d-flex flex-column align-items-center gap-4">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
