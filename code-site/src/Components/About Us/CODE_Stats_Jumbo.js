import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyle } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MapboxComp from "../Landing/map2";
import Jumbotron from "react-bootstrap/Jumbotron";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import logo from "./../../Assets/img/CODE Logos/CODE Logo Black.png";
import MailChimp from "./../Landing/MailchimpSignup";

class TopBar extends Component {
  render() {
    return (
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
              {/* Babson CODE */}
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
              <Grid container spacing={3} justify="center">
                <Grid item>
                  {/* <Button variant="contained" color="primary">
                    Subscribe to Newsletter
                  </Button> */}
                  {/* <Paper style={{ padding: "30px", borderRadius: "15px"}}>
                    <div id="mc_embed_signup">
                      <form
                        action="https://babsoncode.us19.list-manage.com/subscribe/post?u=3d116a6f505eae239db9472b2&id=d5a1276109"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        noValidate
                      >
                        <div id="mc_embed_signup_scroll">
                          <label
                            htmlFor="mce-EMAIL"
                            style={{ marginRight: "20px" }}
                          >
                            Subscribe:
                          </label>
                          <input
                            type="email"
                            defaultValue=""
                            name="EMAIL"
                            className="email"
                            id="mce-EMAIL"
                            placeholder="email address"
                            required
                            style={{ width: "400px", padding: "5px" }}
                          />
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            // aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_3d116a6f505eae239db9472b2_d5a1276109"
                              tabIndex={-1}
                              defaultValue
                            />
                          </div>
                          <div
                            className="clear"
                            style={{ textAlign: "center", marginTop: "20px" }}
                          >
                            <input
                              type="submit"
                              style={{
                                backgroundColor: "green",
                                padding: "10px 30px",
                                borderRadius: "15px",
                                color: "white",
                                fontSize: "20px",
                              }}
                              defaultValue="Subscribe"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="button"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </Paper> */}
                </Grid>
              </Grid>
              <Container>
                <Paper style={{ padding: "30px", borderRadius: "15px", margin: "0 200px" }}>
                  <MailChimp></MailChimp>
                </Paper>
                {/* <!--End mc_embed_signup--> */}
                {/* <Grid item>
                  <Button variant="contained" color="primary">
                    Check Event Calendar
                  </Button>
                </Grid> */}
              </Container>
            </div>
          </Container>
        </Box>
      </Jumbotron>
    );
  }
}

export default TopBar;
