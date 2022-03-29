import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";
import "../src/index.css";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  function renderPage(page) {
    if (page === "aboutMe") {
      return <About />;
    } else if (page === "portfolio") {
      return <Portfolio />;
    } else if (page === "contactMe") {
      return <ContactForm />;
    } else if (page === "resume") {
      return <Resume />;
    }
  }

  const [currentCategory, setCurrentCategory] = useState("aboutMe");

  return (
    <div>
      <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <main>
        {renderPage(currentCategory)}
        <Footer />
      </main>
    </div>
  );
}

export default App;
