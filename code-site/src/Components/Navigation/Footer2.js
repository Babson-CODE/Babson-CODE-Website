import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container } from "react-bootstrap";
import MailchimpSignup from "./../Mailchimp/MailChimpUI";
import "./../../App.css";

class Footer extends React.Component {
  render() {
    const blackLink = {
      color: "black",
      backgroundColor: "transparent",
      textDecoration: "none",
    };
    return (
      <MDBFooter className="font-small pt-4 mt-4 background-color">
        <Container>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6" style={{ paddingBottom: "30px" }}>
                <MailchimpSignup headline="Sign-Up for the CODE Newsletter" />
              </MDBCol>
              <MDBCol md="3">
                <h5 className="title">Babson CODE</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="/" style={blackLink}>
                      Home
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="about-us" style={blackLink}>
                      About Us
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="Residents" style={blackLink}>
                      Residents
                    </a>
                  </li>
                  {/* <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 4
                    </a>
                  </li> */}
                </ul>
              </MDBCol>
              {/* <MDBCol md="2">
                <h5 className="title">Babson CODE</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 1
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 2
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 3
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol> */}
              <MDBCol md="3">
                <h5 className="title">CODE Around the Web</h5>
                <ul>
                  <li className="list-unstyled">
                    <a
                      href="https://www.instagram.com/babsoncode/"
                      style={blackLink}
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a
                      href="https://b-m.facebook.com/BabsonCODE/"
                      style={blackLink}
                    >
                      Facebook
                    </a>
                  </li>
                  {/* <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 3
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 4
                    </a>
                  </li> */}
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Container>
        <div
          className="footer-copyright text-center py-3"
          style={{ backgroundColor: "rgb(0, 148, 44)" }}
        >
          <Container>
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.BabsonCODE.com"> BabsonCODE.dev </a>
            </MDBContainer>
          </Container>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
