import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyle } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MapboxComp from '../Landing/map2';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {Container as Cont} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';

export default function AboutUsPage(props){
    const { classes } = props;

    return(
        <React.Fragment>
            <Jumbotron as="section" className={classes.aboutJumbo} fluid>
                <Box width="100vw" height="100vh" alignItems="center" justifyContent="center" display="flex">
                    <Container height="100vh" width='100vw' mb="auto" mt="auto" fontWeight="fontWeightMedium">
                        
                        <Typography component="h1" variant="h2" align="center" color="contrastText" gutterBottom>
                            About CODE 
                        </Typography>
                        <Typography component="h3" variant="h4" align="center" color="textPrimary" paragraph>
                            CODE (Community Of Developers and Entrepreneurs) is the heart of technology and entrepreneurship at Babson.
                        </Typography>
                        <div className={classes.aboutColText}>
                            <Grid container spacing={6} justify="center">
                                <Grid item >
                                    <Typography component="h3" variant="h4" color="textPrimary">
                                        Founded
                                    </Typography>
                                    <Typography component="h4" variant="h5" color="textPrimary">
                                        2015
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography component="h3" variant="h4" color="textPrimary">
                                        21
                                    </Typography>
                                    <Typography component="h4" variant="h5" color="textPrimary">
                                        Residents
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography component="h3" variant="h4" color="textPrimary">
                                        180+
                                    </Typography>
                                    <Typography component="h4" variant="h5" color="textPrimary">
                                        General Memebers
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Box>
            </Jumbotron>
            <Container>
                <Box>
                    <Grid container spacing={3} direction="row" justify="space-between">
                        <Box className={classes.aboutTextContainers} justify="space-between" component={Paper}>
                            <Grid item xs={6} sm={6} md={6}>
                                
                                    <Typography align="left" component="h5" variant="h6" fontWeight="fontWeightMedium" >
                                    Tools should adapt to the user, not the other way around.
                                    </Typography>
                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>

                                <Typography align="right" component="h6" variant="body1" flexShrink={1}>
                                    We view technology as a tool to form disruptive companies that change the world. CODE is a platform to find co-founders, collaborate on ideas and learn more about technology and entrepreneurship as a whole. CODE also consults to technology startups through the Blank Center of entrepreneurship at Babson.

                                    We are proud to say most of our residents are working on solving tough problems around the world they are passionate about through a startup.
                                </Typography>
                            </Grid>
                        </Box>
                        <Box className={classes.aboutTextContainers} justify="space-between" component={Paper}>
                            <Grid item xs={6}>
                                <Typography align="left" component="h5" variant="h6">
                                    Learn. 
                                    Develop. 
                                    Launch.
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography align="right" component="h6" variant="body1" flexShrink={1}>
                                CODE hosts a variety of workshops with partner companies. It allows students to learn on demand skills with real world projects under their belt. It allows them to launch their startup or find a job without a problem.
                                </Typography>
                            </Grid>
                        </Box>
                        <Box className={classes.aboutTextContainers} justify="space-between" component={Paper}>
                            <Grid item xs={6}>
                                <Typography align="left" component="h5" variant="h6">
                                    Opportunities to apply your knowledge
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography align="right" component="h6" variant="body1" flexShrink={1}>
                                Apart from competingin Hackathons ourselves, CODE also hosts learning hackathons where students compete to learn a new language or skill and build a notable project for an specific amount of time.
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    
                </Box>
            </Container>
                
            
        </React.Fragment>
    );
}