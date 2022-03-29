import React from "react";
import Nav from "../Nav";

function Header(props) {
  console.log("in the header compent", props)
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header>
      <div>
        <h1>this is header</h1>
      </div>
      <div>
        <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      </div>
    </header>
  );
}

export default Header;
