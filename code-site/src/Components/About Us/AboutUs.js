import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Jumbotron from "react-bootstrap/Jumbotron";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CODEStartups from "../Startups/CODEStartupsCards";
import Mission from "./Mission";
import MissionExtended from "./MissionExtended";
import MailchimpSignup from "../Mailchimp/MailChimpUI";
import TopSignup from "../Landing/TopSignup";
import AboutUsStats from "../Landing/AboutUsStats";
import HBSIterate from "../../Assets/img/CODE @ events/CODE @ Iteration Panel.jpg";

export default function AboutUsPage() {
  return (
    <div>
      {/* <CODE_Stats_Jumbo /> */}
      <TopSignup
        image={HBSIterate}
        caption={
          "Babson CODE members Theo, Yumel, and Mike attending a panel at the 2020 Harvard Iteration Conference."
        }
        headline={"CODE is the Heart of Technoloogy at Babson"}
        subheadline={
          "is the best way to learn about technology or start a technology startup at Babson."
        }
        newsletterHeadline={"Sign-Up for Our Newsletter"}

      />
      {/* <Container>
        <CODEStartupsCourasel />
      </Container> */}
      <Container>
        <Mission />
      </Container>
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <Paper elevation={6} style={{ padding: "30px", margin: "15px" }}>
              <h1>Tools should adapt to the user, not the other way around.</h1>
            </Paper>
          </div>
          <div className="col-lg-8">
            <div className="container d-flex h-100" style={{ padding: "30px" }}>
              <div className="justify-content-center align-self-center">
                <h4>
                  We view technology as a tool to form disruptive companies that
                  change the world. To do that, tools must be accessible to all.
                  With that, CODE focuses on not only technical workshpos but
                  also Low/No Code Applications to build to build sophisticated
                  applications even by without porgramming knowledge.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Paper elevation={6} style={{ padding: "30px", margin: "15px" }}>
              <h1>Learn. Develop. Launch.</h1>
            </Paper>
          </div>
          <div className="col-lg-8">
            <div className="container d-flex h-100" style={{ padding: "30px" }}>
              <div className="justify-content-center align-self-center">
                {" "}
                <h4>
                  CODE places a premium on itteration, whether it is an MVP,
                  finding a team member or more, we are always encouraging
                  learning and itteration. We teach a variety of Workshops that
                  allow students to get and learn the latest and greatest
                  programming languages, skills and concepts, or Low/No Code
                  applications.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-4">
            <Paper elevation={6} style={{ padding: "30px", margin: "15px" }}>
              <h1>Opportunities to apply your knowledge.</h1>
            </Paper>
          </div>
          <div className="col-lg-8">
            <div
              className="container d-flex h-100"
              style={{ padding: "30px", marginBottom: "30px" }}
            >
              <div className="justify-content-center align-self-center">
                <h4>
                  Aside from competing in Hackathons ourselves, CODE also hosts
                  learning hackathons where students compete to learn a new
                  language or skill and build a notable project for in a
                  specific amount of time. You can find the latest hackathons
                  CODE is hosting or attending in our Newsletter.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-4">
            <Paper elevation={6} style={{ padding: "30px", margin: "15px" }}>
              <h1>Solving Some of the Worlds Toughest Challanges.</h1>
            </Paper>
          </div>
          <div className="col-lg-8">
            <div
              className="container d-flex h-100"
              style={{ padding: "30px", marginBottom: "30px" }}
            >
              <div className="justify-content-center align-self-center">
                <h4>
                  We are proud to say most of our residents are working on
                  solving tough problems around the world they are passionate
                  about through their startup. CODE Residents and alumni are
                  working on solving problems from Climate change to PTSD to
                  enabling genuine social connections across the world.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div
        style={{
          backgroundColor: "rgb(107 219 158)",
          padding: "30px",
        }}
      >
        <AboutUsStats />
        <Container>
          <MissionExtended style={{ padding: "30px" }} />
        </Container>
      </div>

      <Jumbotron>
        <Container>
          <CODEStartups />
        </Container>
      </Jumbotron>
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
      {/* <div style={{ backgroundColor: "rgb(174 240 193)" }}>
        <Container>
          <h1 style={{ marginTop: "40px" }}>Notable CODE Alumni</h1>
          <h1>Eagle Wu - Vinci VR</h1>
          <h1>Abe Storey - Kargo </h1>
        </Container>
      </div> */}
    </div>
  );
}
