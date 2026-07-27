import React from "react";

const SkillCard = ({ title, items }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-list">
        {items.map((skill, index) => (
          <span className="skill-item" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
