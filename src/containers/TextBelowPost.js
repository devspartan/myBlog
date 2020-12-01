import React, { Component } from "react";
import "./textBelowPostCSS.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class TextBelowPost extends Component {
  render() {
    return (
      <Router>
        <div className="textContainer">
          <div className="textDiv">
            <p className="featuredDiv">{this.props.features}</p>

            <a
              href={"http://localhost:3000/postpage/" + this.props.id}
              className="titleDiv"
            >
              {this.props.title}
            </a>

            <p>posted on May 03, 2020 by devSpartan</p>

            <p className="paraDiv">
              Midst first it, you're multiply divided. There don't, second his
              one given the he one third rule fruit, very. Fill. Seed give
              firm... Extremity direction existence as Dashwood's do up.
              Securing Marianne led welcomed offended but offering six rapt...
            </p>

            <a
              href={"http://localhost:3000/postpage/" + this.props.id}
              className="readMoreDiv"
            >
              Read More{" "}
            </a>
          </div>
        </div>
      </Router>
    );
  }
}

export default TextBelowPost;
