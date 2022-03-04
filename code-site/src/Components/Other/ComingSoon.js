import React, { Component } from "react";
import Container from "@material-ui/core/Container";

export default class NoMatch extends Component {
  render() {
    return (
      <Container>
        <div style={{textAlign: "center", margin: "20px"}}>
          <img
            src="https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555999902/shape/mentalfloss/construction_8.gif?itok=i0AHeyO3"
            alt="Under Construction"
          />
          <h1>The CODE Website Remains Under Construction</h1>
          <h2>
            We will be finishing the site by the middle of the semester offering
            Resources, more information about our partners, and much more.
            Please check back later!
          </h2>
        </div>
      </Container>
    );
  }
}
