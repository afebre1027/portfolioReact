import React from "react";



function Projects(props) {
  console.log(props);
  return (
    <section>
      <div>
        <img
          src={props.image}
          alt="portfolio"
          className="img-thumbnail mx-1"
          style={{ width: "50%" }}
        />
      </div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </section>
  );
}

export default Projects;
