import React, { Component } from "react";

class Partners extends Component {
  render() {
    return (
      <div>
        <div
          className="row"
          style={{
            // marginTop: "30px",
            padding: "40px",
            borderTop: "5px solid black",
          }}
        >
          <div className="col-lg-4">
            <img
              src={this.props.logo}
              className="img-responsive"
              style={{ width: "100%" }}
            ></img>
          </div>
          <div className="col-lg-8" style={{ paddingLeft: "30px" }}>
            <div class="container d-flex h-100">
              <div class="row justify-content-center align-self-center">
                <a href={this.props.website} style={{ color: "black" }}>
                  <h3>{this.props.name}</h3>
                </a>
                <h6>{this.props.description}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
