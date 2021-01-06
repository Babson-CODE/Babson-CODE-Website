import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyle } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MapboxComp from "../Landing/map2";
import Jumbotron from "react-bootstrap/Jumbotron";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Container as Cont } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import CODEStartups from "./CODEStartups";
import CODEStartupsCourasel from "./CODEStartupsCarousel";

export default function AboutUsPage(props) {
  return (
    <React.Fragment>
      <Jumbotron as="section" fluid>
        {/* className={classes.aboutJumbo} */}
        <Box
          width="100vw"
          // height="100vh"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Container
            height="100vh"
            width="100vw"
            mb="auto"
            mt="auto"
            fontWeight="fontWeightMedium"
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="contrastText"
              gutterBottom
            >
              Babson CODE
            </Typography>
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="textPrimary"
              paragraph
            >
              Babson CODE (Community Of Developers and Entrepreneurs) is the
              heart of technology and entrepreneurship at Babson.
            </Typography>
            {/* <div className={classes.aboutColText}> */}
            <Grid container spacing={10} justify="center">
              <Grid item>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h3"
                  variant="h5"
                  color="textPrimary"
                >
                  2015
                </Typography>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h4"
                  variant="h6"
                  color="textPrimary"
                >
                  Founded
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h3"
                  variant="h5"
                  color="textPrimary"
                >
                  $50+ Million
                </Typography>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h4"
                  variant="h6"
                  color="textPrimary"
                >
                  Startups worth
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h3"
                  variant="h5"
                  color="textPrimary"
                >
                  21
                </Typography>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h4"
                  variant="h6"
                  color="textPrimary"
                >
                  Residents
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h3"
                  variant="h5"
                  color="textPrimary"
                >
                  200+
                </Typography>
                <Typography
                  style={{ textAlign: "center" }}
                  component="h4"
                  variant="h6"
                  color="textPrimary"
                >
                  General Memebers
                </Typography>
              </Grid>
            </Grid>
            {/* </div> */}
          </Container>
        </Box>
      </Jumbotron>
      <Container>
        <CODEStartupsCourasel />
      </Container>
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <h1>Tools should adapt to the user, not the other way around.</h1>
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
            <h1>Learn. Develop. Launch.</h1>
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
        <div className="row">
          <div className="col-lg-4">
            <h1>Opportunities to apply your knowledge.</h1>
          </div>
          <div className="col-lg-8">
            <div className="container d-flex h-100" style={{ padding: "30px" }}>
              <div className="justify-content-center align-self-center">
                Apart from competingin Hackathons ourselves, CODE also hosts
                learning hackathons where students compete to learn a new
                language or skill and build a notable project for an specific
                amount of time.
              </div>
            </div>
          </div>
        </div>
        <CODEStartups />
      </Container>
    </React.Fragment>
  );
}
