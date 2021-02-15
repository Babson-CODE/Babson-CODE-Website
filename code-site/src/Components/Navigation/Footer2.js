import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Navbar, Nav, Container } from "react-bootstrap";
import MailchimpSignup from "./../Landing/MailchimpSignup";
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
                <MailchimpSignup />
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Babson CODE</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="/404" style={blackLink}>Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Babson CODE</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Babson CODE</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>
                      Link 1
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" style={blackLink}>Link 4</a>
                  </li>
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
              <a href="https://www.BabsonCODE.com"> BabsonCODE.com </a>
            </MDBContainer>
          </Container>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
