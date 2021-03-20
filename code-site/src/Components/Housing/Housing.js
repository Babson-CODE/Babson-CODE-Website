import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "react-bootstrap/Button";
import Paper from "@material-ui/core/Paper";
import Apply from "./../../Assets/img/Other/Housing - Apply.jpg";
import Explore from "./../../Assets/img/Other/Housing - Explore.jpg";
import "./styles.css";
import Headline from "./../Universal Components/Headline";

class Housing extends Component {
  render() {
    return (
      <div
        className="col-12"
        style={{
          backgroundColor: "rgb(248, 249, 250)",
          marginTop: "40px",
        }}
      >
        <Container>
          <Headline
            headline={"CODE Housing Application"}
            subheadline={
              "Apply to live with the 20 other best technologically minded students at Babson for Fall 2021"
            }
          />
          <div className="row">
            <div className="col-md-6">
              <Paper level={6}>
                <div
                  style={{
                    padding: "30px",
                    margin: "30px",
                    textAlign: "center",
                  }}
                >
                  <img src={Apply} width={"75%"} alt={""}></img>
                  <h1>Apply for Housing</h1>
                  <h4>Our Housing Applications are Now Open</h4>
                  <h6>Priority Applications are due: February 27th</h6>
                  <h6>General Applications are due: March 4th</h6>
                  <a
                    href="https://forms.gle/tuigKCmJUNg5gzZr5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="default" style={{ marginTop: "20px" }}>
                      Apply Now
                    </Button>
                  </a>
                </div>
              </Paper>
            </div>
            <div className="col-md-6">
              <Paper level={6}>
                <div
                  style={{
                    padding: "30px",
                    margin: "30px",
                    textAlign: "center",
                  }}
                >
                  <img src={Explore} width={"75%"} alt={""}></img>
                  <h1>Explore our Community</h1>
                  <h4>Our residents are amazing! </h4>
                  <h6 style={{ marginBottom: "39px" }}>
                    Check out what they've been up to.
                  </h6>

                  <a href="/about-us">
                    <Button className="default" style={{ marginTop: "20px" }}>
                      Our Community
                    </Button>
                  </a>
                  {/* <Button style={{backgroundColor: "rgb(238, 249, 246)", color: "rgb(91, 198, 168)", backgroundColor::hover: "rgb(238, 249, 246)", color: "rgb(91, 198, 168)", border: "none", padding: "13px"}}>Apply Now</Button> */}
                </div>
              </Paper>
            </div>
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <a
              href="https://forms.gle/tuigKCmJUNg5gzZr5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{
                  textAlign: "center",
                  padding: "30px",
                  color: "white",
                  backgroundColor: "green",
                }}
                className="col-12"
              >
                <h1>The CODE Housing Application is Open NOW!</h1>
                <h4>Can't wait to review your applicaiton</h4>
                <br></br>
                <h5>Application Deadlines:</h5>
                <p>Priority Application Due: February 26, 2021</p>
                <p>Secondary Deadline: March 4th, 2021</p>
              </Button>
            </a>
          </div> */}
        </Container>
      </div>
    );
  }
}

export default Housing;
