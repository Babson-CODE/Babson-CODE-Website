import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyle } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MapboxComp from "../Landing/map2";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import NewsletterSignupForm from "../Contact Us/newslettersignup";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import codecover from "./code-cover.jpg";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import { MemberCarousel } from "../Residents/album";
import Footer from "../Navigation/footer";
import { compose } from "recompose";
import {
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdbreact";
import { withAuthorization, withEmailVerification } from "../Session";
import Messages from "../Messages";
import { render } from "react-dom";
import Navigation from "../Navigation";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import Modal from "react-bootstrap/Modal";
import MailChimp from "react-mailchimp-form";
import Nav from "react-bootstrap/Nav";
import { Tabs } from "antd";
import aboutPic from "../../Assets/img/5f8cf8d0913a102739f032f6_babsoncodehackathon.png";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ReactCardCarousel from 'react-card-carousel';


const { Meta } = Card;

const { TabPane } = Tabs;

function ControlledTabs() {
  const [key, setKey] = useState("home");

  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="About" key="1">
          <p>Content of Tab Pane 1</p>
        </TabPane>
        <TabPane tab="Apply" key="2">
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="Explore" key="3">
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </div>
  );
}

function Landed() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="landingContainer">
      <header>
        <MDBView src={codecover} fixed>
          <MDBMask className="rgba-black-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%", paddingTop: "17rem" }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                  Welcome to CODE!
                </h1>
                <hr className="hr-light my-4" />
                <h5 className="text-uppercase mb-4 white-text ">
                  <strong>
                    Come explore Babson's Community of Developers &
                    Entrepreneurs
                  </strong>
                </h5>
                <MDBBtn outline color="white" onClick={handleShow}>
                  Connect
                </MDBBtn>
                <MDBBtn outline color="white">
                  About us
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </header>
      <main>
        {/* About us mini-section*/}

        <div className="d-flex row alig-items-center text-center">
          <div
            className="d-flew col-sm-6 aboutTxt"
            id="aboutText"
            style={{ float: "left" }}
          >
            <h1>Who we are</h1>
            <h5>
              Babson CODE is a diverse community of high-achieving individuals
              who share a goal: to leverage tech to change the world
            </h5>
            <br />
            What do we do
            <ul>
              <li>
                Support each other as we pursue our various individual
                projects/companies/assignments/etc.
              </li>
              <li>Provide technical workshops for nonmembers</li>
              <li>Organize and/or compete in Hackathons</li>
              <li>
                And many other professional and intellectual activites to
                support and learn from each other
              </li>
              <li>
                Last but not least, we hang out with each other and have a
                blast!
              </li>
            </ul>
          </div>
          <div className="d-flex col-sm-6" id="aboutImg">
            <img src={aboutPic} alt="hackathonPic" className="img-fluid"></img>
          </div>
        </div>
        {/* End */}
        {/* Current Residents Carousel */}

        {/*Section on ways to connect with us*/}

        <h1 className="text-center">Our Programs</h1>
        <CardGroup className="justify-content-around">
          <Card
            title="Subscribe to Newsletter"
            style={{ width: 300 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
 
              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            title="CODE Connect"
            style={{ width: 300 }}

            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta

              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            title="Become a Resident"
            style={{ width: 300 }}

            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CardGroup>

        <div className="d-flex justify-content-center">
          <ControlledTabs />
        </div>
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to our Newsletter!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MailChimp
            action={process.env.REACT_APP_MAILCHIMP_URL}
            fields={[
              {
                name: "EMAIL",
                placeholder: "Email",
                type: "email",
                required: true,
              },
            ]}
            // Change predetermined language
            messages={{
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "You must write an e-mail.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Subscribe!",
            }}
            className="mailchimpSubscribeForm"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Landed;
