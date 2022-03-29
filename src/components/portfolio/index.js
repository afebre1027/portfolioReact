import React from "react";
import Project from "../Project";

function Portfolio() {
  const currentCategory = [
    {
      name: "run buddy",
      description: "In this application, it demonstrates my first uses of CSS and HTML. Run Buddy is a fitness program that is all virtual.",
      image: "assets/runBuddy.png"
    },
    {
      name: "The 3 Codeteers",
      description: "In this team project we creaed a game night theme application that lets you create a account, comment, and keep track of you high scores.",
      image:"assets/codeteers.png"
    },
    {
        name: "Team Member Builder",
        description: "Here I created a team member builder using Object-Oriented Programming and Test-Driven Development",
        image:"assets/oop-tdd.png"
      },
      {
        name: "codeteers",
        description: "number 2",
        image:"assets/codeteers.png"
      },
      {
        name: "Note Taker",
        description: "Note Taker is a application that keeps track of all your notes. This was created with Express and is deployed thru heroku.",
        image:"assets/express-note-taker.png"
      },
      {
        name: "Food & Drink",
        description: "This is a application for random food and drink recipes. Both run off of third party APIs.",
        image:"assets/f&Dapp.png"
      },
  ];

  return (
    <div>
      <h1>all information will go here</h1>
      {currentCategory.map((singleProject) => (
        <Project
          name={singleProject.name}
          description={singleProject.description}
          image={singleProject.image}
        />
      ))}
    </div>
  );
}

export default Portfolio;
