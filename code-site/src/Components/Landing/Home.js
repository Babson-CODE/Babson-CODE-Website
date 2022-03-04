import React from "react";
import Container from "@material-ui/core/Container";
import Headline from "./../Universal Components/Headline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MemberRectangleHome from "../Residents/MemberRectangleHome";
import StartupsCarousel from "../Startups/CarouselImages";
import MailchimpSignup from "../Mailchimp/MailChimpUI";
import Housing from "./../Housing/Housing";
import TopSignup from "./TopSignup";
import AboutUsStats from "./AboutUsStats";
import HackathonImage from "../../Assets/img/CODE @ events/MoneyHackathon.png";
export default function LandingPage() {
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
            <Headline
              headline={"Meet the Residents"}
              subheadline={
                "21 Residents live together every semester in Van Winkle Hall"
              }
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

        <Container>
          <Headline
            headline={"CODE Startups"}
            subheadline={
              "Since CODE was founded in 2016, CODE Startups have cumulative valuations over $50 Million"
            }
          />
          <div style={{ paddingBottom: "30px" }}>
            <StartupsCarousel />
          </div>
        </Container>

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
