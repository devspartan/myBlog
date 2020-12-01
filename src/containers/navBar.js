import React from "react";
import "./navBarCSS.css";
import Search from "./search";

function navBar() {
  return (
    <div class="navBarMain">
      <div className="navBarM">
        <nav className="navBar">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Learn Blogging</a>
          <a href="#">Documentation</a>
          <a href="#">Download This Template</a>
        </nav>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default navBar;
