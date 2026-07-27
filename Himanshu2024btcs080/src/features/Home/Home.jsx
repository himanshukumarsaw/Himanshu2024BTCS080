import React from "react";
import { Link } from "react-router";
import data from "../../data.json";

function Home() {
  const name = data.name;
  const role = data.tag;
  const shortBio = data.shortBio;
  const firstSentence = data.fullBio;

  return (
    <div>
      <h1>Welcome</h1>
      <h2>Hi, I am {name}</h2>
      <p>{role}</p>

      <p>{shortBio}</p>
      <p>{firstSentence}.</p>
      <img src="./src/assets/1.jpg" height="80px"></img>
      <Link to="/about">Know More</Link>
    </div>
  );
}

export default Home;
