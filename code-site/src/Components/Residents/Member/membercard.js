import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const theme = createMuiTheme();

const styles = {
  root: {
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
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  },
};

function membercard(props) {
  const { classes } = props;

  const linked = props.linkedin;
  const email = props.email;

  return (
    <Card className={classes.card}>
      {/* <CardMedia
        className={classes.cardMedia}
        image={props.image}
        title={props.full_name}
      ></CardMedia> */}
      {/* <img src={require("../../../Assets/" + props.image)} style={{float: 'right', width: "45px"}}></img> */}
      {/* {console.log(props.image)} */}
      {/* {console.log(props.first_name)} */}
      <img
        src={require("../../../Assets/img/Members Photos" + props.image)} 
        style={{ float: "right", height: "150px", margin: "10px" }}
      ></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.first_name + " " + props.last_name}
        </Typography>
        <Typography>Learn more about {props.first_name}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<LinkedInIcon />}
          size="small"
        >
          <Link
            component="button"
            onClick={() => {
              window.open(linked, "__blank");
            }}
          >
            LinkedIn
          </Link>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<EmailIcon />}
          size="small"
        >
          <Link
            component="button"
            onClick={() => {
              window.open(email, "__blank");
            }}
          >
            Email
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

membercard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(membercard);
