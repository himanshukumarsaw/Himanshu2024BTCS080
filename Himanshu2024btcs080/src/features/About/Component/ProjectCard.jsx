import React from "react";

const ProjectCard = ({ title, bio, tags }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{bio}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span className="project-tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
