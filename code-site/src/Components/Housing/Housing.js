import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "react-bootstrap/Button";

class Housing extends Component {
  render() {
    return (
      <div className="col-12">
        <Container>
          <h1
            style={{
              fontSize: "2.5em",
              lineHeight: "1.5em",
              textAlign: "center",
              paddingTop: "50px",
            }}
          >
            CODE Housing Application
          </h1>
          <hr
            style={{
              borderTop: "2.5px dashed",
              margin: "20px 200px 50px 200px",
            }}
          />
          <div style={{ textAlign: "center" }}>
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
          </div>
        </Container>
      </div>
    );
  }
}

export default Housing;
