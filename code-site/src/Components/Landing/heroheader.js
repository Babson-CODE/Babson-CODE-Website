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
  }));

export default function LandingHero(props){
    const { classes, post } = props;  

    return(
            <Grid container className={classes.root}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Grid item xs={12} sm={12} md={12} width={1}>
                    <Grid container component={Paper} className={classes.root} width={1}>
                        <Grid item xs={false} sm={4} md={7} style={{backgroundImage: `url(${post.image})`}} className={classes.image}>
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} align="center" square>
                            <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography compnent="h5" color="inherit" align="center" paragraph>
                            {post.description}
                            </Typography>
                            <Link variant="subtitle1" href="#">
                                {post.linkText}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
            </Grid>
    );
}