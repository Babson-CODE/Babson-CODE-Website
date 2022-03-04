import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import MailchimpReact from "../Landing/MailchimpSignup";
import Paper from "@material-ui/core/Paper";
import Jumbotron from "react-bootstrap/Jumbotron";

class NewsletterPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 style={{ textAlign: "center"}}>Babson CODE's Newsletter</h1>
          <h4 style={{ textAlign: "center"}}>The CODE Newsletter is the best resource for tech-entrepreneruship in the Boston Area. </h4> 
        </Jumbotron>
        <Container>
            <p>Sent out Weekly</p>
            <p>Includes weekly Events</p>
            <p>Includes Startup and Technology News</p>
            <p>Resources for Startups (Hackathons, Funding Annoucnements, Pitch Competitions, etc)</p>
            <p></p>
        </Container>
        <Container>
          <Paper item elevation={6} style={{ padding: "30px" }}>
            <MailchimpReact tagline="Join our Newsletter!" />
          </Paper>
        </Container>
        <Container style={{ paddingTop: "30px" }}>
            <h1>Check out some Old CODE Newsletters</h1>
        </Container>
      </div>
    );
  }
}

export default NewsletterPage;
