import React, {useState} from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

import "./App.css";
import "../src/index.css";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      Description: "all of my projects will go here",
    },
    {
      name: "My Resume",
      Description: "resume will be created here",
    },
    {
      name: "About Me",
      Description: "about me section should go here",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
