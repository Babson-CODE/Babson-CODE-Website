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
import Housing from "./../Housing/Housing";
import Button from "react-bootstrap/Button";
import TopSignup from "./TopSignup";
import AboutUsStats from "./AboutUsStats";
import HackathonImage from "../../Assets/img/CODE @ events/MoneyHackathon.png";

export default function LandingPage(props) {
  // const { classes, post } = props;

  return (
    <React.Fragment>
      <div>
        <TopSignup
          image={HackathonImage}
          caption={"Babson CODE winning the Money Hack 20/20, Hackathon 2016."}
        />
        <AboutUsStats />
        <Housing />

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
              <div style={{ textAlign: "right" }}>
                <a href="/residents">
                  <Button  style={{ backgroundColor: "white", border: "transparent", color: "black", padding: "20px", borderRadius: "20px" }}>Meet more Residents →</Button>
                </a>
              </div>
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
