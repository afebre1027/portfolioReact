import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";

import "./App.css";
import "../src/index.css";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "Portfolio",
      Description: "all of my projects will go here",
    },
    {
      name: "My Resume",
      Description: "resume will be created here",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
