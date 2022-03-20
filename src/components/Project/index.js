import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/cover/runBuddy.png";

function Projects(props) {
  const currentCategory = {
    name: "run buddy",
    description: "here is my portfolio",
  };

  return (
    <section>
      <div>
        <img
          src={photo}
          alt="portfolio"
          className="img-thumbnail mx-1"
          style={{ width: "30%" }}
        />
      </div>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
    </section>
  );
}

export default Projects;
