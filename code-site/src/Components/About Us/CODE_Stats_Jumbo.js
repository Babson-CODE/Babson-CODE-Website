import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Jumbotron from "react-bootstrap/Jumbotron";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import logo from "./../../Assets/img/CODE Logos/CODE Logo Black.png";
import MailChimp from "./../Landing/MailchimpSignup";

class TopBar extends Component {
  render() {
    return (
      <Jumbotron as="section" fluid>
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
              <img
                alt="Babson CODE Logo"
                src={logo}
                height="100px"
                style={{ marginBottom: "0px" }}
              />
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="contrastText"
              gutterBottom
            >
              {this.props.welcome}
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
                  Startups Worth
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
            <div style={{ marginTop: "20px" }}>
              <Container>
                <Paper
                  style={{
                    padding: "30px",
                    borderRadius: "15px",
                    margin: "0 200px",
                  }}
                >
                  <MailChimp />
                </Paper>
              </Container>
            </div>
          </Container>
        </Box>
      </Jumbotron>
    );
  }
}

export default TopBar;
