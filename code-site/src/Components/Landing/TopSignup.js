import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import MailchimpSignup from "../Mailchimp/MailChimpUI";
import HackathonImage from "../../Assets/img/CODE @ events/MoneyHackathon.png";

class TopSignup extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "rgb(174 240 193)",
            overflow: "hidden",
            marginBottom: "50px",
          }}
        >
          <Container>
            <div className="d-none d-lg-block">
              <img
                src={this.props.image}
                style={{
                  borderRadius: "40px",
                  width: "60%",
                  float: "right",
                  margin: "80px 50px 20px 60px",
                }}
              ></img>
              <figcaption
                style={{ textAlign: "center", margin: "0px 50px 60px 60px", float: "right" }}
              >
                {this.props.caption}
              </figcaption>
              <div
                style={{
                  backgroundColor: "white",
                  overflow: "hidden",
                  borderRadius: "40px ",
                  padding: "40px",
                  position: "absolute",
                  top: "0",
                  marginTop: "200px",
                  marginRight: "42%",
                }}
              >
                <h1>Welcome to the Heart of Technoloogy at Babson</h1>
                <h5
                  style={{
                    fontWeight: "normal",
                    fontSize: "1.25em",
                    lineHeight: "1.45em",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Babson CODE</span>{" "}
                  (Community Of Developers and Entrepreneurs) is the heart of
                  technology and entrepreneurship at Babson.
                </h5>
                <MailchimpSignup headline="Sign-Up for Our Newsletter" />
              </div>
            </div>
            <div className="d-lg-none">
              <img
                src={this.props.image}
                style={{
                  borderRadius: "40px",
                  margin: "30px 0px 5px 0px",
                  width: "100%",
                }}
              ></img>
              <figcaption style={{ textAlign: "center" }}>
                {this.props.caption}
              </figcaption>
              <div
                style={{
                  backgroundColor: "white",
                  // overflow: "hidden",
                  borderRadius: "40px ",
                  padding: "40px",
                  // position: "absolute",
                  // top: "0",
                  margin: "30px 0px",
                  // marginRight: "42%",
                }}
              >
                <h1>Welcome to the Heart of Technoloogy at Babson</h1>
                <h5
                  style={{
                    fontWeight: "normal",
                    fontSize: "1.25em",
                    lineHeight: "1.45em",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Babson CODE</span>{" "}
                  (Community Of Developers and Entrepreneurs) is the heart of
                  technology and entrepreneurship at Babson.
                </h5>
                <MailchimpSignup headline="Sign-Up for Our Newsletter" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default TopSignup;
