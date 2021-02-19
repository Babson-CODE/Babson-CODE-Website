import React, { Component } from "react";
import HackathonImage from "../../Assets/img/CODE @ events/MoneyHackathon.png";
import Container from "@material-ui/core/Container";
import MailchimpSignup from "../Mailchimp/MailChimpUI";


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
                src={HackathonImage}
                style={{
                  borderRadius: "40px",
                  width: "60%",
                  float: "right",
                  margin: "80px 50px 50px 60px",
                }}
              ></img>
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
                <h1 style={{ fontSize: "1.75em", lineHeight: "1.5em" }}>
                  Welcome to the Heart of Technoloogy at Babson
                </h1>
                <p style={{ fontWeight: "normal" }}>
                  <span style={{ fontWeight: "bold" }}>Babson CODE</span>{" "}
                  (Community Of Developers and Entrepreneurs) is the heart of
                  technology and entrepreneurship at Babson.
                </p>
                <MailchimpSignup headline="Sign-Up for Our Newsletter" />
              </div>
            </div>

            <div className="d-lg-none">
              <img
                src={HackathonImage}
                style={{
                  borderRadius: "40px",
                  margin: "30px 0px 5px 0px",
                  width: "100%",
                }}
              ></img>
              <figcaption style={{ textAlign: "center" }}>
                Babson CODE winning the Money Hack 20/20, Hackathon 2016.
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
                <h1 style={{ fontSize: "1.75em", lineHeight: "1.5em" }}>
                  Welcome to the Heart of Technoloogy at Babson
                </h1>
                <p style={{ fontWeight: "normal" }}>
                  <span style={{ fontWeight: "bold" }}>Babson CODE</span>{" "}
                  (Community Of Developers and Entrepreneurs) is the heart of
                  technology and entrepreneurship at Babson.
                </p>
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
