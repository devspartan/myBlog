import React, { Component, Fragment } from "react";
import MainContainer1 from "./mainContainer1";
import MainContainer2 from "./mainContainer2";
import MainContainer3 from "./mainContainer3";
import Comp1 from "./components/Comp1";
import WithHOC from "./withHOC";
import "./postButtonCSS.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ActionComponent extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact strict component={MainContainer1} />
          <Route path="/page2" exact component={MainContainer2} />
          <Route path="/page3" exact component={MainContainer3} />
          <Route
            path="/postpage/:id"
            exact
            render={({ match }) => {
              return (
                <Comp1
                  title={this.props.arr[match.params.id].title}
                  feature={this.props.arr[match.params.id].feature}
                  img={this.props.arr[match.params.id].img}
                />
              );
            }}
          />
        </Fragment>
      </Router>
    );
  }
}

export default WithHOC(ActionComponent);
