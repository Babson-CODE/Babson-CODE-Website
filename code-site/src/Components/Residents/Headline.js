import React, { Component } from "react";
import Container from "@material-ui/core/Container";

class Headline extends Component {
  render() {
    // let type = this.props.type.slice(0,1).toUpperCase() + props.type.slice(1, props.type.length);
    let capital = this.props.type;
    capital = capital[0].toUpperCase() + capital.substring(1);

    return (
      <div>
        <Container
          style={{ padding: "20px", textAlign: "center" }}
        >
          <h1>Our {capital}</h1>
          <h4>
            {this.props.subheadline}
          </h4>
          {/* <h5>Click on each {this.props.type} to learn more about them.</h5> */}
        </Container>
      </div>
    );
  }
}

export default Headline;