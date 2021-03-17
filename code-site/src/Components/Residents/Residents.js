import React from "react";
import EachResident from "./EachResident";
import Button from "react-bootstrap/Button";

const cards = [1, 2, 3];

function MemberCarousel() {
  // const classes = useStyles();

  return (
    <div className="row">
      <div className="col-xl-4" style={{ padding: "30px" }}>
        <img
          src={require("../../Assets/img/Members Photos" + "/Alvie.jpg")}
          height="250px"
          style={{ marginLeft: "120px" }} // Could be 50px also
        ></img>
        <div
          style={{
            padding: "30px 0px 30px 30px",
            marginRight: "30px",
            marginTop: "-210px",
            backgroundColor: "white",
          }}
        >
          <div style={{ marginTop: "210px", padding: "25px 30px 10px 0px" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "30px",
              }}
            >
              Alvie Stoddard
            </h1>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              CEO & Founder,{" "}
              <a href="http://xhighlight.com" style={{ color: "black" }}>
                XHighlight
              </a>
            </h2>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "16px",
              }}
            >
              President of Babson CODE
            </h3>
            <p>
              Alvie is an aspiring entrepreneur who is very interested in
              technology and programming. He is working on a startup,
              XHighlight, the fastest and easiest way to create sports and
              highlight videos. He is also CODE's most senior member, having
              lived in CODE since Sophomore year and being active in leadership
              decisions since the end of his freshman year. Finally, he studied
              at Babson San Francisco in Spring 2018 and hopes to live out there
              upon graduation. Academics wise, he is a senior Graduating in May
              of 2021 and is concentrating in Technology, Entrepreneurship, and
              Design and Information Technology Management.
            </p>
            <Button
              style={{
                backgroundColor: "Green",
                padding: "10px 30px",
                borderRadius: "15px",
              }}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
      <div className="col-xl-4" style={{ padding: "30px" }}>
        <img
          src={require("../../Assets/img/Members Photos" + "/Julian.png")}
          height="250px"
          style={{ marginLeft: "120px" }} // Could be 50px also
        ></img>
        <div
          style={{
            padding: "30px 0px 30px 30px",
            marginRight: "30px",
            marginTop: "-210px",
            backgroundColor: "white",
          }}
        >
          <div style={{ marginTop: "210px", padding: "25px 30px 10px 0px" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "30px",
              }}
            >
              Julian Wiley
            </h1>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              CTO & Founder,{" "}
              <a
                href="https://www.linkedin.com/company/oneye-technologies/"
                style={{ color: "black" }}
              >
                Oneye Technologies LLC
              </a>
            </h2>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "16px",
              }}
            >
              CODE Chief Technical Consultant
            </h3>
            <p>
              Julian is a young entrepreneur who is passionate about technology
              and its impact on the world. He is currently the CTO of Oneye
              Technologies, a startup focused on providing a cloud-based IoT
              solution to simplify insurance claims and bring the power of AI to
              all cars. As tech lead of CODE, he helps other students with their
              projects and serves on the eboard as one of its leaders. He is a
              Google Certified Cloud Architect who is currently working towards
              AWS solutions architect and GCP data engineer certifications. For
              academics, he is a junior who is concentrating in Technology,
              Entrepreneurship, and Design and Information Technology
              Management.
            </p>
            <a href="https://www.linkedin.com/in/julian-wiley-8377b5175/">
              <Button
                style={{
                  backgroundColor: "Green",
                  padding: "10px 30px",
                  borderRadius: "15px",
                }}
              >
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-4" style={{ padding: "30px" }}>
        <img
          src={require("../../Assets/img/Members Photos" + "/Ashley.jpeg")}
          height="250px"
          style={{ marginLeft: "120px" }} // Could be 50px also
        ></img>
        <div
          style={{
            padding: "30px 0px 30px 30px",
            marginRight: "30px",
            marginTop: "-210px",
            backgroundColor: "white",
          }}
        >
          <div style={{ marginTop: "210px", padding: "25px 30px 10px 0px" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "30px",
              }}
            >
              Ashley Lim
            </h1>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              <a
                href="https://engage.babson.edu/organization/bbn"
                style={{ color: "black" }}
              >
                President of the Babson Blockchain Club
              </a>
            </h2>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "16px",
              }}
            >
              Member of the CODE Newsletter Team & President of the Babson
              Blockchain Club
            </h3>
            <p>
              Ashley recently became the president of Babson's Blockchain Club
              and is wanting to learn more about the technical components of
              blockchain, in addition to learning a new programming language
              (likely Python or C++). She is interested in starting a tech
              startup surrounding mental health and community and hopes to take
              courses at Olin and Wellesley College to help strengthen her
              coding skills and find business partners. As a CODE resident,
              Ashley is determined to make Babson students more technologically
              savvy and expose them to new technological innovations as
              inspiration for their own businesses or career. She also wants to
              bring more young women into CODE and help with outreach for CODE
              events.
            </p>
            {/* <button
                style={{
                  backgroundColor: "light-green",
                  padding: "10px 30px",
                  borderRadius: "15px",
                }}
              >
                Connect on LinkedIn
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MemberCarousel };
