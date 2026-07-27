import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = ({ projects }) => {
  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            bio={project.bio}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
