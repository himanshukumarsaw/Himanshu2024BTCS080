import React from "react";

const AbtHero = ({ name, tag, bioLines }) => {
  return (
    <div className="about-hero">
      <h1>{name}</h1>
      <p className="about-tag">{tag}</p>
      <div className="about-bio">
        {bioLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default AbtHero;
