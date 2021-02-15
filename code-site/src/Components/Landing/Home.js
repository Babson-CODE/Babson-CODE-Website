import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import { withStyle } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import MapboxComp from "./map2";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";
// import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
// import NewsletterSignupForm from "../ContactUs/newslettersignup";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Image from "react-bootstrap/Image";
// import codecover from "./code-cover.jpg";
// import Zoom from "@material-ui/core/Zoom";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Button from "@material-ui/core/Button";
import { MemberCarousel } from "../Residents/album";
// import Footer from "../Navigation/Footer";
// import logo from "./../../Assets/img/CODE Logos/CODE Logo Black.png";
import Mission from "../About Us/Mission";
import MissionExtended from "../About Us/MissionExtended";
// import Startups from "../Startups/StartupsCollage";
import MailchimpSignup from "./MailchimpSignup";
import ChimpUI from "./ChimpUI";
import CODE_Stats_Jumbo from "./../About Us/CODE_Stats_Jumbo";
import HackathonImage from "../../Assets/img/CODE @ events/MoneyHackathon.png";

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
        {/* <CODE_Stats_Jumbo welcome="Welcome to CODE!" /> */}
        <div
          style={{
            backgroundColor: "rgb(174 240 193)",
            overflow: "hidden",
            marginBottom: "100px",
          }}
        >
          <Container>
            <img
              src={HackathonImage}
              style={{
                borderRadius: "40px",
                width: "40%",
                float: "right",
                margin: "80px 50px 50px 60px",
              }}
            ></img>
            {/* <div
              style={{
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: "40px ",
                padding: "40px",
                position: "absolute",
                top: "0",
                marginTop: "100px",
                marginRight:"42%",
              }}
            > */}
            <div
              style={{
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: "40px ",
                padding: "40px",
                position: "absolute",
                top: "0",
                marginTop: "100px",
                marginRight: "42%",
              }}
            >
              <h1>Welcome to the Heart of Technoloogy at Babson</h1>
              <p style={{ fontWeight: "normal" }}>
                <span style={{ fontWeight: "bold" }}>Babson CODE</span>{" "}
                (Community Of Developers and Entrepreneurs) is the heart of
                technology and entrepreneurship at Babson.
              </p>
              <ChimpUI></ChimpUI>
            </div>
          </Container>
        </div>

        {/* <Container>
          <Mission />
          <MissionExtended />
        </Container> */}
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
        {/* <Box mt={9} mb={9} height="100%">
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
        </Box> */}
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
