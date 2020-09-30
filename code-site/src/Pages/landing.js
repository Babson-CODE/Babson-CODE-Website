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
import { MDBView, MDBMask } from 'mdbreact';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

export default function Landing(){
    return(
        <header>
            <MDBView className="landingHeader">
                
            </MDBView>
        </header>
    );
}