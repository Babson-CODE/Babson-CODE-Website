import React from "react";
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
import Image from "react-bootstrap/Image";
import codecover from "./code-cover.jpg";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from '@material-ui/core/Button';
import {MemberCarousel} from '../Residents/album';
import Footer from "../Navigation/footer";
import { compose } from 'recompose';
import { MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import { render } from "react-dom";
import Navigation from '../Navigation';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';

function Landed() {

  return(
    <div id="landingContainer">
      <header>
        <MDBView src={codecover} fixed>
            <MDBMask className="rgba-black-light"/>
            <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                  Welcome to CODE!
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>Come explore Babson's Community of Developers & Entrepreneurs</strong>
                </h5>
                <MDBBtn outline color='white'>
                  Connect
                </MDBBtn>
                <MDBBtn outline color='white'>
                  About us
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </header>
      <main>

        <Divider className="my-8" plain>Features</Divider>
        
      </main>
    </div>
  );
}

export default Landed;