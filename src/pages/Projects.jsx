import projectList from "../utils/projectList";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // pic, title, body, source, site
  const testCard = {
    pic: "/images/Big boss.jpg",
    title: "Test title",
    body: "This is a project where I made a website for myself using React, Vite, and Bootstrap. I deployed it with vercel.",
    source: "https://www.github.com/",
    site: "https://www.google.com/",
  };
  return (
    <div className="p-4">
      <h1>Projects</h1>
      {projectList.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
