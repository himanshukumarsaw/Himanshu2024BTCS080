import React from "react";
import SkillCard from "./SkillCard";

const SkillSection = ({ skills }) => {
  return (
    <section className="skill-section">
      <h2>Skills</h2>
      <div className="skill-grid">
        {skills.map((skillCategory) => (
          <SkillCard
            key={skillCategory.title}
            title={skillCategory.title}
            items={skillCategory.items}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
