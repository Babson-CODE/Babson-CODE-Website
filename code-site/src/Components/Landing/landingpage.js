import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyle } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MapboxComp from '../Landing/map2';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import NewsletterSignupForm from '../Contact Us/newslettersignup';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    contactUsFooter: {
        position: 'relative',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
    image: {
        width: 128,
        height: 128,
      }
  }));

export default function LandingPage(props){
    const { classes, post } = props;  

    return(
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Paper width='100vw' >
                    <div className={classes.heroHead}>
                    
                    <Grid container spacings={3} justify="center" width={1}>
                        <Grid item xs={6}>
                            <div className={classes.heroContent}>
                                    <Paper elevation={3} style={{backgroundImage: `url(${post.image})`}}>
                                    {<img style={{display: "inline-flex" , maxWidth: '100%', maxHeight: '100%'}} src={post.image} alt={post.imageText} className={classes.img} />}
                                        
                                    </Paper>

                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Paper className={classes.paper}>
                                    <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>
                                        {post.title}
                                    </Typography>
                                    <Typography compnent="h5" color="inherit" align="center" paragraph>
                                    {post.description}
                                    </Typography>
                                    <Link variant="subtitle1" href="#">
                                        {post.linkText}
                                    </Link>
                                    </Paper>
                                    </div>
                        </Grid>
                    </Grid>
                    </div>
                    </Paper>

                <Grid container spacings={6} justify="center">
                <Grid item xs={12}>
                        <MapboxComp></MapboxComp>
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <NewsletterSignupForm classes={classes}></NewsletterSignupForm> 
                    </Box>
                </Grid>  
                </Grid>

            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
LandingPage.propTypes = {
    post: PropTypes.object,
    classes: PropTypes.object,
  };