import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { MemberCarousel } from "../Residents/Residents";
import MailchimpSignup from "../Mailchimp/MailChimpUI";
import StartupsCarousel2 from "../Startups/StartupsCarousel2";
import Housing from "./../Housing/Housing"
import Button from 'react-bootstrap/Button';
import TopSignup from "./TopSignup"
import AboutUsStats from "./AboutUsStats"
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
        <TopSignup image={HackathonImage} caption={"Babson CODE winning the Money Hack 20/20, Hackathon 2016."} />
        <AboutUsStats/>
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
