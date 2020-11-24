import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "react-bootstrap/Container";
import Link from "@material-ui/core/Link";
import { memberData } from "../Components/Residents/Member/memberdata";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Box from "@material-ui/core/Box";
import albumphoto from "../Assets/img/thisisengineering.jpg";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const theme = createMuiTheme();

const styles = {
    root:{
        icon: {
        marginRight: theme.spacing(2),
        },
        heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
        marginTop: theme.spacing(4),
        },
        cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        },
        card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        },
        cardMedia: {
        paddingTop: '56.25%', // 16:9
        },
        cardContent: {
        flexGrow: 1,
        },
        footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        },
    }
  };

export default function ResidentsPage(){

    return(
        <div id="residentsPage" className="residentsDiv">
            <header>
                <MDBView src={albumphoto} fixed>
                    <MDBMask className="rgba-dark-light" />
                    <MDBContainer
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '100%', width: '100%' }}
                    >
                        <MDBRow>
                        <MDBCol md='12' className='mb-4 white-text text-center'>
                            <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                            Come see what our residents are up to!
                            </h1>
                            <hr className='hr-light my-4' />
                            <MDBBtn outline color='white'>
                            Subscribe to our newsletter
                            </MDBBtn>
                            <MDBBtn outline color='white'>
                            Check events calendar
                            </MDBBtn>
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </header>
            <main>
            <div className="residentsDivider">
                <Container maxWidth="sm">
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Current Residents
                </Typography>
                </Container>

                <hr className="hr-dark my-4 mr-4 ml-4" />
            </div>
            <Container className="cardColumns" maxWidth="md">
                <CardColumns>
                    {memberData.map((data, card) => (
                        <Card key={data.id}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + data.media.photo} alt="cardImage"/>
                            <Card.Body>
                                <Card.Title>{data.full_name}</Card.Title>
                                <Card.Text>About {data.first_name}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div className="residentCardButtons">
                                    <IconButton
                                        variant="contained"
                                        color="inherit"
                                        className="button"
                                        size="small"
                                    >
                                        <Link onClick={() => { window.open(data.linkedIn, "__blank");
                                            }}
                                        >
                                            <LinkedInIcon />
                                        </Link>
                                        </IconButton>
                                        <IconButton
                                            variant="contained"
                                                color="inherit"
                                                className="button"
                                                size="small" 
                                                >
                                            <Link onClick={() => { window.open(data.linkedIn, "__blank");
                                            }}
                                        >
                                            <EmailIcon />
                                        </Link>
                                    </IconButton>
                                </div>
                            </Card.Footer>
                        </Card>
                    ))};
                </CardColumns>
            </Container>
            <div className="residentsDivider">
            <Container maxWidth="sm">
            <Typography
                component="h2"
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                Former Residents
            </Typography>
            </Container>
            <hr className="hr-dark my-4 mr-4 ml-4" />
            </div>
            </main>
        </div>
    );
}

function ResidentSection(props) {
    const { classes } = props;

    return(
        <>
        <Container>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {memberData.map((data, card) => (
                <GridListTile key={card} cols={1}>

                    <img src={process.env.PUBLIC_URL + data.media.photo} alt={data.full_name} />
                </GridListTile>
            ))};
            </GridList>
        </Container>
        
        </>
    )
}

const ResidentBlob = withStyles(styles)(ResidentSection);
export {ResidentBlob};