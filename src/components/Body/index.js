import React from "react";
import Portfolio from "../Portfolio";
import About from "../About";

function Body(props) {
  const { currentCategory } = props;
  
  return currentCategory.name === "About Me" ? <About /> : <Portfolio />;
}

export default Body;
