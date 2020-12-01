import React from "react";
import "./headerCSS.css";

function header() {
  return (
    <head className="header">
      <nav className="headerMenu">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/">Contact Us</a>
        <a href="#">About Us</a>
      </nav>
      <div>SOCIAL</div>
    </head>
  );
}

export default header;
