import React, { Component } from "react";
import img6 from "./images/pic6.jpg";
import img7 from "./images/pic7.jpg";
import img8 from "./images/pic8.jpg";
import img9 from "./images/pic9.jpg";
import img10 from "./images/pic10.jpg";
import img11 from "./images/pic11.jpg";
import img12 from "./images/pic12.jpg";
import img13 from "./images/pic13.jpg";
import img14 from "./images/pic14.jpg";
import img15 from "./images/pic15.jpg";
import img16 from "./images/pic16.jpg";
import img17 from "./images/pic17.jpg";

const withHOC = (WrappedComponent) => {
  class WithHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        arr: [
          { img: img17, feature: "fashion", title: "new look", id: 0 },
          {
            img: img6,
            feature: "simple",
            title: "modern business style",
            id: 1,
          },
          {
            img: img7,
            feature: "fashion",
            title: "memories from last summer",
            id: 2,
          },
          { img: img8, feature: "featured", title: "lunch time", id: 3 },
          { img: img9, feature: "day", title: "amazing day", id: 4 },
          { img: img10, feature: "fasion", title: "fitness mantra", id: 5 },
          {
            img: img11,
            feature: "simple",
            title: "easter outfit ideas",
            id: 6,
          },
          {
            img: img12,
            feature: "featured",
            title: "greetings from bottom",
            id: 7,
          },
          { img: img13, feature: "fashion", title: "say morning", id: 8 },
          {
            img: img14,
            feature: "day",
            title: "get together in a fun way",
            id: 9,
          },
          { img: img15, feature: "featured", title: "follow my steps", id: 10 },
          { img: img16, feature: "simple", title: "be cool", id: 11 },
          {
            img: img17,
            feature: "fasion",
            title: "new look for new year",
            id: 12,
          },
        ],
      };
    }

    render() {
      return <WrappedComponent arr={this.state.arr} />;
    }
  }
  return WithHOC;
};
export default withHOC;
