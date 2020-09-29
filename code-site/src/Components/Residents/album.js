import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { memberData } from "./Member/memberdata";
import membercard from "./Member/membercard";
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
import albumphoto from "../../Assets/img/thisisengineering.jpg";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    //    backgroundColor: theme.palette.background.paper,
   padding: '20%',
//   height: '100%',
   flexDirection: "column",
//   justifyContent: "center",
   alignItems: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardMedia: {
//    paddingTop: "56.25%", // 16:9
    height: '100%',
    width: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  albumJumbotron:{
    backgroundImage: `url(${albumphoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:'100vw',
    height: '100vh',
  },
  albumCarousel:{

    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  mainDiv: {
    padding: theme.spacing(0),
    height: '100vh',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0),
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  contain:{
      maxWidth: false,
      disableGutters: true,
      padding: 0,
 //     justifyContent: "center",
      alignItems: 'center',
  },
  residentContentDivider: {
    //    backgroundColor: theme.palette.background.paper,
//   padding: '20%',
//   height: '100%',
   flexDirection: "column",
//   justifyContent: "center",
   alignItems: 'center',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album(props) {
  const classes = useStyles();
  const checked = props;

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Hero unit */}

      <div className={classes.mainDiv}>
        <Jumbotron as="section" className={classes.albumJumbotron} fluid>
          <Box className={classes.heroContent}>
            <Container maxWidth="sm" className={classes.contain}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Our Residents
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Come take a look at what our current and former residents are up
                to. CODE hosts 21 students in residence, all of whom have are
                busy helping change the world through technology-based
                entrepreneurship.
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
      </div>
      <div className={classes.residentContentDivider}>
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
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={2}>
          {memberData.map((data, card) => (
            <Grid item key={data.id} xs={12} sm={6} md={4}>
              <Zoom
                in={props.checked}
                style={{ transitionDelay: checked ? "500ms" : "0ms" }}
              >
                <Paper elevation={4} className={classes.paper}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image={process.env.PUBLIC_URL + data.media.photo}
                      title={data.full_name}
                    ></CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.full_name}
                      </Typography>
                      <Typography gutterBottom component="h3" variant="caption">
                        About {data.first_name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                        variant="contained"
                        color=""
                        className={classes.button}
                        size="small"
                      >
                        <Link
                          color="contrastText"
                          onClick={() => {
                            window.open(data.linkedIn, "__blank");
                          }}
                        >
                         <LinkedInIcon /> 
                        </Link>
                      </IconButton>
                      <IconButton
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        size="small"
                      >
                        <Link
                          color="contrastText"
                          onClick={() => {
                            window.open(data.email, "__blank");
                          }}
                        >
                          <EmailIcon />
                        </Link>
                      </IconButton>
                    </CardActions>
                  </Card>
                </Paper>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.residentContentDivider}>
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
      </div>
    </React.Fragment>
  );
}

function MemberCarousel() {
  const classes = useStyles();

  return(
    <div className={classes.albumCarousel}>
      <GridList className={classes.gridList} cols={3.5} cellHeight={500}>
        {memberData.map((tile) => 
          <GridListTile key={tile.media.photo}>
            <img src={process.env.PUBLIC_URL + tile.media.photo} />
            <GridListTileBar key={tile.media.photo}
              title={tile.full_name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`linked ${tile.full_name}`}>
                  <LinkedInIcon className={classes.title}/>
                </IconButton>
              }
            />
          </GridListTile> 
          )}
      </GridList>
    </div>
  );
}

export { MemberCarousel };