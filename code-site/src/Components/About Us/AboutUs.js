import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Jumbotron from "react-bootstrap/Jumbotron";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Container as Cont } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import CODEStartups from "../Startups/CODEStartupsCards";
import CODEStartupsCourasel from "../Startups/CODEStartupsCarousel";
import Mission from "./Mission";
import CODE_Stats_Jumbo from "./CODE_Stats_Jumbo";
import MailchimpReact from "./../Mailchimp/MailChimpUI";
import logo from "./../../Assets/img/CODE Logos/CODE Logo Black.png";
import MailchimpSignup from "../Mailchimp/MailChimpUI";
import TopSignup from "../Landing/TopSignup";
import AboutUsStats from "../Landing/AboutUsStats";

export default function AboutUsPage() {
  return (
    <div>
      {/* <CODE_Stats_Jumbo /> */}
      <TopSignup />
      {/* <Container>
        <CODEStartupsCourasel />
      </Container> */}
      <Container>
        <Mission />
      </Container>
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <Paper elevation={6} style={{ padding: "30px", margin: "15px" }}>
              <h1>Tools should adapt to the user, not the other way around.</h1>
            </Paper>
          </div>
          <div className="col-lg-8">
            <div className="container d-flex h-100" style={{ padding: "30px" }}>
              <div className="justify-content-center align-self-center">
                We view technology as a tool to form disruptive companies that
                change the world. CODE is a platform to find co-founders,
                collaborate on ideas and learn more about technology and
                entrepreneurship as a whole. CODE also consults to technology
                startups through the Blank Center of entrepreneurship at Babson.
                We are proud to say most of our residents are working on solving
                tough problems around the world they are passionate about
                through a startup.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Paper elevation={6} style={{ padding: "30px", margin: "15px" }}>
              <h1>Learn. Develop. Launch.</h1>
            </Paper>
          </div>
          <div className="col-lg-8">
            <div className="container d-flex h-100" style={{ padding: "30px" }}>
              <div className="justify-content-center align-self-center">
                CODE hosts a variety of workshops with partner companies. It
                allows students to learn on demand skills with real world
                projects under their belt. It allows them to launch their
                startup or find a job without a problem.
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-4">
            <Paper elevation={6} style={{ padding: "30px", margin: "15px" }}>
              <h1>Opportunities to apply your knowledge.</h1>
            </Paper>
          </div>
          <div className="col-lg-8">
            <div
              className="container d-flex h-100"
              style={{ padding: "30px", marginBottom: "30px" }}
            >
              <div className="justify-content-center align-self-center">
                Apart from competingin Hackathons ourselves, CODE also hosts
                learning hackathons where students compete to learn a new
                language or skill and build a notable project for an specific
                amount of time.
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div style={{ margin: "30px" }}>
        <AboutUsStats />
      </div>
      <Jumbotron>
        <Container>
          <CODEStartups />
        </Container>
      </Jumbotron>
      <Box>
        <Container>
          <Grid>
            <Grid
              item
              component={Paper}
              elevation={6}
              square
              style={{ padding: "30px" }}
            >
              <h1>Newsletter Sign-Up</h1>
              <MailchimpSignup />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <div style={{ backgroundColor: "rgb(174 240 193)" }}>
        <Container>
          <h1 style={{ marginTop: "40px" }}>Notable CODE Alumni</h1>
          <h1>Eagle Wu - Vinci VR</h1>
          <h1>Abe Storey - Kargo </h1>
        </Container>
      </div> */}
    </div>
  );
}
