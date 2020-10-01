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

/*
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: ",
  },
  mainFeaturedPostContent: {
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  contactUsFooter: {
    position: "relative",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  
}));


          <Container className={classes.imgPaper} overflow="hidden">
            <Image src={codecover} fluid className={classes.image} />
            <h1 className={classes.title}>Welcome to Babson CODE!</h1>
          </Container>
*/
/*
function LandingPage(props) {
  const { classes, post } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Jumbotron fluid as="section" className={classes.landingJumbotron}>
        <Box className={classes.heroContent} mx="auto">
            <Container maxWidth="sm" className={classes.contain}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="inherit"
                gutterBottom
              >
                Welcome to CODE!
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                  
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={3} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Subscribe to Newsletter
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Check Event Calendar
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Box>
        </Jumbotron>
        <Box className={classes.memberCarouselBox} mt={9} mb={9} height="100%">
          <Container>
          <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Our Residents
              </Typography>
            <MemberCarousel />
          </Container>
        </Box>
        <Box>
        <Container>
          <div>
            <Grid container>
              <Grid item xs={false} sm={4} md={7}>
                <MapboxComp></MapboxComp>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
              >
                <NewsletterSignupForm classes={classes}></NewsletterSignupForm>
              </Grid>
            </Grid>
          </div>
        </Container>
        </Box>
      </div>

    </React.Fragment>
  );
}
LandingPage.propTypes = {
  post: PropTypes.object,
  classes: PropTypes.object,
};
*/

/* 
 <Grid container component="main" className={classes.root}>

                <Grid item xs={12} sm={12} md={12} width={1} height={1}>
                    <Grid container component={Paper} className={classes.root} width={1}>
                        <Grid item xs={false} sm={4} md={7} style={{backgroundImage: `url(${post.image})`}} className={classes.image}>
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} elevation={6} square component={Paper}>
                            <div>
                            <Container maxWidth="sm">
                                <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography compnent="h5" color="inherit" align="center" paragraph>
                                {post.description}
                                </Typography>
                                <Link variant="subtitle1" href="#">
                                {post.linkText}
                                </Link>
                            </Container>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                        
                </Grid>
                <Grid item xs component={Paper}>
                   <Box>
                    <MapboxComp></MapboxComp>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper}>
                    <Box>
                        <NewsletterSignupForm classes={classes}></NewsletterSignupForm> 
                    </Box>
                </Grid>  
            

            </Grid>

      

            <footer className={classes.footer}>
                
                <Typography variant="h6" align="center" gutterBottom>
                Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
                </Typography>
                
            </footer>

*/
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
    </div>
  );
}

export default Landed;