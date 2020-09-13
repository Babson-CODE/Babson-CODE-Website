import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { memberData } from './Member/memberdata';
import membercard from './Member/membercard';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />



      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Our Residents
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Come take a look at what our current and former residents are up to. CODE hosts 21 students in residence, all of whom have are busy
                helping change the world through technology-based entrepreneurship.
            </Typography>
            <div class={classes.heroButtons}>
                <Grid container spacings={3} justify="center">
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
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {memberData.map((data, card) => (
                    <Grid item key={data.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image={data.media.photo}
                        title={data.full_name}>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                About {data.first_name}
                                </Typography>
                                <Typography>
                                About me section 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="secondary" className={classes.button} startIcon={<LinkedInIcon />} size="small">
                            <Link 
                            component="button"
                            onClick={() => {
                                window.open(data.linkedIn, "__blank" );
                            }} >
                            LinkedIn
                            </Link>
                            </Button>
                            <Button variant="contained" color="secondary" className={classes.button} startIcon={<EmailIcon />} size="small">
                            <Link
                            component="button"
                            onClick={() => {
                            window.open(data.email, "__blank");
                            }}> 
                            Email 
                            </Link>
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                ))
                }
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}