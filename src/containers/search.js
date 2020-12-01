import React, { useState } from "react";
import img from "./images/searchIcon.png";
import "./searchCSS.css";

function Search() {
  const submittHandler = (event) => {
    event.preventDefault();
    alert("searched");
  };

  const [searchState, setState] = useState(false);

  const searchImage = () => {
    searchState ? console.log("kj") : setState(true);
  };

  const searchClass = searchState
    ? "searchClassFalse active"
    : "searchClassFalse";

  return (
    <form onSubmit={submittHandler}>
      <div className="search1">
        <input type="text" className={searchClass} placeholder="Search"></input>
        <img onClick={searchImage} src={img} />
      </div>
    </form>
  );
}

export default Search;
