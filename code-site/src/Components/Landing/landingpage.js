import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyle } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MapboxComp from "../Landing/map2";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import NewsletterSignupForm from "../Contact Us/newslettersignup";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import codecover from "./code-cover.jpg";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import { MemberCarousel } from "../Residents/album";
import Footer from "../Navigation/Footer";
import logo from "./../../Assets/img/CODE Logos/CODE Logo Black.png";
import Mission from "./../About Us/Mission";
import Startups from "./Startups";
import MailchimpSignup from "./MailchimpSignup";
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
        <Jumbotron fluid as="section">
          <Box mx="auto">
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="inherit"
                gutterBottom
              >
                <img
                  alt="Babson CODE Logo"
                  src={logo}
                  height="100px"
                  style={{ marginBottom: "20px" }}
                />
                Welcome to CODE!
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              ></Typography>
            </Container>
            <Container
              height="100vh"
              width="100vw"
              mb="auto"
              mt="auto"
              fontWeight="fontWeightMedium"
            >
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
                <Grid container spacing={3} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Subscribe to Newsletter
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Check Event Calendar
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Box>
        </Jumbotron>
        <Container>
          <Mission />
        </Container>
        <Box mt={9} mb={9} height="100%">
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Our Residents
            </Typography>
            <MemberCarousel />
          </Container>
        </Box>
        <Box mt={9} mb={9} height="100%">
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              CODE Startups
            </Typography>
            <Startups />
          </Container>
        </Box>
        <Box>
          <Container>
            <Grid>
              {/* <Grid item xs={false} sm={4} md={3} lg={5} xl={5}>
                  <MapboxComp></MapboxComp>
                </Grid> */}
              <Grid
                item
                component={Paper}
                elevation={6}
                square
                style={{ padding: "30px" }}
              >
                <Typography
                  component="h2"
                  variant="h3"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Newsletter Sign-Up
                </Typography>
                <MailchimpSignup></MailchimpSignup>
                {/* <NewsletterSignupForm></NewsletterSignupForm> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </React.Fragment>
  );
}
