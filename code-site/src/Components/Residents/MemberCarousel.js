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
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    //    backgroundColor: theme.palette.background.paper,
    padding: "20%",
    //   height: '100%',
    flexDirection: "column",
    //   justifyContent: "center",
    alignItems: "center",
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
    height: "100%",
    width: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  albumJumbotron: {
    backgroundImage: `url(${albumphoto})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  },
  albumCarousel: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  mainDiv: {
    padding: theme.spacing(0),
    height: "100vh",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0),
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  contain: {
    maxWidth: false,
    disableGutters: true,
    padding: 0,
    //     justifyContent: "center",
    alignItems: "center",
  },
  residentContentDivider: {
    //    backgroundColor: theme.palette.background.paper,
    //   padding: '20%',
    //   height: '100%',
    flexDirection: "column",
    //   justifyContent: "center",
    alignItems: "center",
  },
}));

function MemberCarousel() {
  const classes = useStyles();

  return (
    <div className={classes.albumCarousel}>
      <GridList className={classes.gridList} cols={3.5} cellHeight={500}>
        {memberData.map((tile) => (
          <GridListTile key={tile.media.photo}>
            <img src={process.env.PUBLIC_URL + tile.media.photo} />
            <GridListTileBar
              key={tile.media.photo}
              title={tile.full_name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`linked ${tile.full_name}`}>
                  <LinkedInIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export { MemberCarousel };
