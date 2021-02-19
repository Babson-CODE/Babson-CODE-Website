import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { MemberCarousel } from "../Residents/Residents";
import MailchimpSignup from "../Mailchimp/MailChimpUI";
import HackathonImage from "../../Assets/img/CODE @ events/MoneyHackathon.png";
import StartupsCarousel2 from "../Startups/StartupsCarousel2";
import Housing from "./../Housing/Housing"
import Button from 'react-bootstrap/Button';


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  contactUsFooter: {
    position: "relative",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));

export default function LandingPage(props) {
  // const { classes, post } = props;

  return (
    <React.Fragment>
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
        <Container>
          <h1
            style={{
              fontSize: "2.5em",
              lineHeight: "1.5em",
              textAlign: "center",
            }}
          >
            About Us
          </h1>
          <hr
            style={{
              borderTop: "2.5px solid",
              margin: "20px 200px 50px 200px",
            }}
          />
          <Container
            height="100vh"
            width="100vw"
            mb="auto"
            mt="auto"
            fontWeight="fontWeightMedium"
          >
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
          </Container>
        </Container>
        <Housing/>

        <div
          style={{
            backgroundColor: "rgb(107 219 158)",
            overflow: "hidden",
            marginTop: "90px",
            marginBottom: "50px",
          }}
        >
          <Container>
            <h1
              style={{
                fontSize: "2.5em",
                lineHeight: "1.5em",
                textAlign: "center",
                padding: "30px",
              }}
            >
              Meet the Residents
            </h1>
            <div style={{ paddingBottom: "30px" }}>
              <MemberCarousel />
            </div>
          </Container>
        </div>

        {/* <StartupsCarousel2 /> */}

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
      </div>
    </React.Fragment>
  );
}
