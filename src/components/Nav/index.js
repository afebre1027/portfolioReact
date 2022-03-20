import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

  const { categories = [], setCurrentCategory, currentCategory } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  return (
    <header className="flex-row">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <h1 className="pure-menu-heading" href="">
          Andrew Febre
        </h1>

        <ul className="pure-menu-list flex-row">
          <li className="pure-menu-item">
            <a href="#about">About me</a>
          </li>

          <li className="pure-menu-item">
            <span>Contact Me</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navAtive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Nav;
