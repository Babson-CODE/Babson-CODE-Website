import React, { Component } from "react";

class EachResident extends Component {
  // https://react-bootstrap.github.io/components/modal/
  render() {
    return (
      // <div className="row">
        <div className="col-xl-4" style={{ padding: "30px" }}>
          <img
            src={require("../../Assets/img/Members Photos" + "/Alvie.jpg")}
            height="250px"
            alt="Alvie"
            style={{ marginLeft: "120px" }} // Could be 50px also
          ></img>
          <div
            style={{
              padding: "30px 0px 30px 30px",
              marginRight: "30px",
              marginTop: "-210px",
              backgroundColor: "white",
            }}
          >
            <div style={{ marginTop: "210px" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "30px",
                  color: "black",
                }}
              >
                Alvie Stoddard
              </h1>
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "20px",
                }}
              >
                CEO & Founder,{" "}
                <a href="http://xhighlight.com" style={{ color: "black" }}>
                  XHighlight
                </a>
              </h2>
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "16px",
                }}
              >
                President of Babson CODE
              </h3>
              <p style={{ padding: "25px 30px 10px 0px" }}>
                Alvie is an aspiring entrepreneur who is very interested in
                technology and programming. He is working on a startup,
                XHighlight, the fastest and easiest way to create sports and
                highlight videos. He is also CODE's most senior member, having
                lived in CODE since Sophomore year and being active in
                leadership decisions since the end of his freshman year.
                Finally, he studied at Babson San Francisco in Spring 2018 and
                hopes to live out there upon graduation. Academics wise, he is a
                senior Graduating in May of 2021 and is concentrating in
                Technology, Entrepreneurship, and Design and Information
                Technology Management.
              </p>
              <button style={{backgroundColor: "light-green", padding: "10px 30px", borderRadius: "15px"}}>Connect on LinkedIn</button>
            </div>
          </div>
        </div>
      // </div>
    );
  }
}

export default EachResident;
