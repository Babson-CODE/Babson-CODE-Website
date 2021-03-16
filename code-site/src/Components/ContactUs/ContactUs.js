import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TopSignup from "../Landing/TopSignup";
import AI_ML_Event from "../../Assets/img/CODEs Events/BarackBerkowitz.JPG";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <TopSignup
          image={AI_ML_Event}
          caption={
            "Babson CODE Hosts ML/AI Thougth Leader and MarketCentrix CEO & Founder Barack Berkowitz in Winter 2018."
          }
          headline={"Join the CODE Newsletter"}
          subheadline={
            "'s Newsletter is the best way to connect with CODE. In our newsletter, you can schedule office hours, attend our events, and learn about on-campus and off-campus events to expand your technology knowledge"
          }
          newsletterHeadline={""}
        />
        <Container>
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "10px",
            }}
          >
            Contact CODE
          </h1>
          <h4 style={{ textAlign: "center" }}>
            Looking to Partner, Speak, or Learn more about Tech at Babson
          </h4>
          <hr
            style={{
              borderTop: "2.5px solid",
              margin: "20px 200px 50px 200px",
            }}
          />
          <h1>Contacting CODE</h1>
          <h2 style={{ padding: "20px" }}>
            The best way to Contact CODE is to email us at{" "}
            <a href="code@babson.edu">code@babson.edu</a>. We are happy to hear
            from students or entrepreneurs who need help, companies looking for
            interns or new graduates, potential speakers, or anyone else looking
            for our assistence.
          </h2>
          <h1>Keeping in Touch</h1>
          <h2 style={{ padding: "20px" }}>
            The best way to keep tabs on what we are doing is to subscribe to
            our newsletter. We send out a once a week email on whats happening
            at Babson reguarding Technology, entrepreneurship. We also send out
            hackathoons and local startup news for the Boston Area. All our
            welcome to subscribe to our newsletter. We think its a great
            resource for any students, startups, entrepreneurs, or investors who
            are looking to learn about the Babson and Startup World.
          </h2>
          {/* <Paper elevation={3} style={{ padding: "30px", margin: "0px 150px" }}>
            <form
              action="mailto:code@babson.edu"
              method="post"
              enctype="text/plain"
            >
              <h6>Name:</h6>
              <input type="text" name="name" />
              <br />
              <h6>E-mail:</h6>
              <input type="text" name="mail" />
              <h6>Comment:</h6>
              <input type="text" name="comment" size="50" />
              <br />
              <br />
              <Button
                type="submit"
                value="Send"
                style={{
                  backgroundColor: "Green",
                  border: "none",
                  marginRight: "20px",
                  padding: "10px 30px",
                }}
              >
                Submit
              </Button>

              <Button
                type="reset"
                value="Reset"
                style={{
                  backgroundColor: "Green",
                  border: "none",
                  marginRight: "20px",
                  padding: "10px 30px",
                }}
              >
                Reset
              </Button>
            </form>
          </Paper> */}
        </Container>
      </div>
    );
  }
}

export default ContactUs;
