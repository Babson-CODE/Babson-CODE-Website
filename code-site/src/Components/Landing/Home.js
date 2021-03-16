import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MemberRectangleHome from "../Residents/MemberRectangleHome";
import MailchimpSignup from "../Mailchimp/MailChimpUI";
import Housing from "./../Housing/Housing";
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
          headline={"Welcome to the Heart of Technoloogy at Babson"}
          subheadline={
            "(Community Of Developers and Entrepreneurs) is the heart of technology and entrepreneurship at Babson."
          }
          newsletterHeadline={"Sign-Up for Our Newsletter"}
        />
        <AboutUsStats />
        <Housing />

        <div
          style={{
            backgroundColor: "rgb(107 219 158)",
            overflow: "hidden",
            // marginTop: "90px",
            marginBottom: "50px",
          }}
        >
          <Container>
            <h1
              style={{
                // fontSize: "2.5em",
                // lineHeight: "1.5em",
                textAlign: "center",
                paddingTop: "50px",
                paddingBottom: "10px",
              }}
            >
              Meet the Residents
            </h1>
            <h4 style={{ textAlign: "center" }}>
              21 Residents live together every semester in Van Winkle Hall
            </h4>
            <hr
              style={{
                borderTop: "2.5px solid",
                margin: "20px 200px 50px 200px",
              }}
            />
            <div style={{ paddingBottom: "30px" }}>
              <MemberRectangleHome color="white" />
              <div style={{ textAlign: "right" }}>
                <a href="/residents">
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "transparent",
                      color: "black",
                      padding: "20px",
                      borderRadius: "20px",
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    View All 21 Residents →
                  </button>
                </a>
              </div>
            </div>
          </Container>
        </div>

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
