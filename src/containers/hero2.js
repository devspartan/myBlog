import React from "react";
import img3 from "./images/pic3.jpg";
import img4 from "./images/pic12.jpg";
import img5 from "./images/pic5.jpg";
import img6 from "./images/pic6.jpg";
import "./hero2CSS.css";

function hero2() {
  const event = () => {
    return 0;
  };

  return (
    <div className="hero2container">
      <div className="hero2img1Div2">
        <img src={img3}></img>
        <h1 onClick={event}>Text</h1>
      </div>
      <div className="hero2img2Div2">
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img6}></img>
      </div>
    </div>
  );
}

export default hero2;
