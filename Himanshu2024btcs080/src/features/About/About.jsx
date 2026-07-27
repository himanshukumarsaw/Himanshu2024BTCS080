import React from "react";
import AbtHero from "./Component/AbtHero";
import SkillSection from "./Component/SkillSection";
import ProjectSection from "./Component/ProjectSection";
import data from "../../data.json";

const About = () => {
  return (
    <div className="about-page">
      <AbtHero name={data.name} tag={data.tag} bioLines={data.bioLines} />
      <SkillSection skills={data.skills} />
      <ProjectSection projects={data.projects} />
    </div>
  );
};

export default About;
