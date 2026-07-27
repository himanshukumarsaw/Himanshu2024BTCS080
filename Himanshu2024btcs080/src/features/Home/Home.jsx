import React from "react";
import { Link } from "react-router";
import data from "../../data.json";

const Home = () => {
  const bioLines = [
    data.shortBio,
    ...data.fullBio.split(". ").filter(Boolean).slice(0, 2),
  ];

  return (
    <div>
      <div>
        <div>
          <h1>Welcome</h1>
          <h2>Hi, I am {data.name}</h2>
          <p>{data.tag}</p>
          {bioLines.map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}
          <Link to="/about">
            Know More
          </Link>
        </div>

        <div>
          <img
            src=""
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
