import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Partner from "./Partners";
import CatalystLogo from "../../Assets/img/Partner Logos/catalyst_logo.png";
import eTower from "../../Assets/img/Partner Logos/eTower.jpg";
import GLV from "../../Assets/img/Partner Logos/GLV.png";
import Foundry from "../../Assets/img/Partner Logos/Foundry.png";
import GVC from "../../Assets/img/Partner Logos/GVC.jpg";
import Omnylaunch from "../../Assets/img/Partner Logos/Omnylaunch.jpeg";
import WeStart from "../../Assets/img/Partner Logos/WeStart.png";
import Mathworks from "../../Assets/img/Partner Logos/Mathworks.png";
import WayFair from "../../Assets/img/Partner Logos/Wayfair.webp";
import CVSHealth from "../../Assets/img/Partner Logos/cvs-health-logo-stacked.png";

export default class Partners extends Component {
  render() {
    return (
      // <div className="col-12">
      <div>
        <Container>
          <h1
            style={{
              fontSize: "2.5em",
              lineHeight: "1.5em",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            Partners
          </h1>
          <h4 style={{ textAlign: "center" }}>
            CODE Partners with a number of different on campus and external
            organizations to provide our members exclusive access, discounts,
            and more each semester.
          </h4>
        </Container>
        <Container>
          {/* <h1 style={{ marginBottom: "10px", paddingBottom: "10px" }}> */}
          <h1 style={{ paddingTop: "40px" }}>Educational Partners</h1>
          <Partner
            logo={CatalystLogo}
            name="Olin Catalyst"
            website="https://www.olin.edu/academic-life/student-affairs-resources/student-life/clubs/catalyst/"
            description="Catalyst, Olin College's entrepreneurship club and incubator, sprung up during the first years of Olin as a place where students could come work on projects. Since then, it has morphed into a club and incubator and has relocated from our space at Edison House to three rooms in the campus center. "
          ></Partner>
          <Partner
            logo={eTower}
            name="Babson eTower"
            website="https//etower.org"
            description="eTower is a passionate group of 21 residents (and 180+ alumni) that contribute to a community centered on entrepreneurship. Being a student-entrepreneur is never easy, but when you are united with individuals who share similar goals and aspirations, incredible things happen, alongside coming away with incredible friendships, memories, and future opportunities."
          ></Partner>
          <Partner
            logo={GLV}
            name="Green Line Ventures"
            website="https://www.greenline.vc/team"
            description="GLV is a student-run venture capital fund backed by 500 Startups. Their goal is to help BOW entrepreneurs move from A to B, by connecting them with the right people, resources, and knowledge to scale their venture."
          ></Partner>
          <Partner
            logo={Foundry}
            name="Weissman Foundry"
            website="https://www.foundry.babson.edu"
            description="The Weissman Foundry is an open-door design studio, inspiring transdisciplinary innovative collaboration between Babson, Olin, and Wellesley for the advancement of new or existing projects."
          ></Partner>
          <Partner
            logo={GVC}
            name="Global Venture Catalyst"
            website="https://www.globalventurecatalyst.org"
            description="GVC connects top technology-focused undergraduate students and global MBAs to team up with experienced mentors working at innovation-driven companies to pursue new ventures and corporate opportunities.            "
          ></Partner>
          <Partner
            logo={Omnylaunch}
            name="Omnylaunch"
            website="https://babson.omnylaunch.com"
            description="OmnyLaunch is a venture builder that helps visionaries quickly evaluate, build, and scale their business concepts."
          ></Partner>
          <Partner
            logo={WeStart}
            name="Wellesley College WeStart"
            website="https://westartwellesley.herokuapp.com"
            description="WeStart aims to inspire female entrepreneurs to change the world. They aim to make a case that entrepreneurship augments the liberal arts experience."
          ></Partner>
        </Container>

        <div style={{ backgroundColor: "rgb(174 240 193)" }}>
          <Container>
            <h1 style={{ paddingTop: "40px" }}>Current Corporate Partners</h1>
            <Partner
              logo={CatalystLogo}
              name="Olin Catalyst"
              website="https://www.olin.edu/academic-life/student-affairs-resources/student-life/clubs/catalyst/"
              description="Catalyst, Olin College's entrepreneurship club and incubator, sprung up during the first years of Olin as a place where students could come work on projects. Since then, it has morphed into a club and incubator and has relocated from our space at Edison House to three rooms in the campus center. "
            ></Partner>
          </Container>
        </div>

        <Container>
          <h1 style={{ paddingTop: "40px" }}>Previous Corporate Partners</h1>
          <Partner
            logo={WayFair}
            name="WayFair"
            website="https://wayfair.com"
          />
          <Partner
            logo={CVSHealth}
            name="CVS Health"
            website="https://cvshealth.com"
          />
          <Partner
            logo={Mathworks}
            name="MathWorks"
            website="http://mathworks.com"
          />
        </Container>
      </div>
    );
  }
}
