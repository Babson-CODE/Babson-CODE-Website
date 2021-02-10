import React, { Component } from "react";
import Container from "@material-ui/core/Container";

export default class Partners extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Partners</h1>
          <p>Olin Catalyst</p>
          <p>Green Line Ventures (GLV)</p>
          <p>Babson eTower</p>
          <p>OmnyLaunch</p>
          <p>Wellesley WeStart</p>
          <p>
            <a href="https://www.globalventurecatalyst.org">
              Global Venture Catalyst (GVC)
            </a>
          </p>

          <h1>Current Corporate Partners</h1>
          <p>A</p>
          <p>B</p>
          <p>C</p>

          <h1>Previous Corporate Parters</h1>
          <p>Google</p>
          <p>WayFair</p>
          <p>CVS Health</p>
          <p>MathWorks</p>
        </Container>
      </div>
    );
  }
}
