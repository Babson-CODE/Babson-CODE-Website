import React, { Component } from "react";

export default class Mission extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            fontSize: "2.5em",
            lineHeight: "1.5em",
            textAlign: "center",
          }}
        >
          CODE Mission
        </h1>
        <h4 style={{ textAlign: "center" }}>
          Since inception, CODE has strived to make technology as accessible as
          possible to Babson Students. While our Mission Statments have evolved,
          we have placed a consistent emphasis on the our desire to enable the
          creation and success of Babson Technology Startups.
        </h4>
        <hr
          style={{
            borderTop: "2.5px solid",
            margin: "20px 200px 50px 200px",
          }}
        />
      </div>
    );
  }
}
