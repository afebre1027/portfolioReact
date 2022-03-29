import React, { useEffect } from "react";

function Nav(props) {
  console.log("in the nav compent", props)
  const {  setCurrentCategory } = props;

  return (
    <header className="flex-row">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <h1 className="pure-menu-heading">Andrew Febre</h1>

        <ul className="pure-menu-list flex-row">
          <li className="pure-menu-item">
            <a href="#about" onClick={() => setCurrentCategory("aboutMe")}>
              About me .
            </a>
          </li>

          <li className="pure-menu-item">
            <span onClick={() => setCurrentCategory("contactMe")}>
              Contact Me .
            </span>
          </li>
          <li className="pure-menu-item">
            <span onClick={() => setCurrentCategory("portfolio")}>
              Portfolio .
            </span>
          </li>
          <li className="pure-menu-item">
            <span onClick={() => setCurrentCategory("resume")}>Resume</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
