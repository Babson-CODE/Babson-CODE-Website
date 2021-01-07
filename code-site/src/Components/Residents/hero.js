import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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

function hero(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <container maxWidth="sm">
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
            Come take a look at what our current and former residents are up to.
            CODE hosts 21 students in residence, all of whom have are busy
            helping change the world through technology-based entrepreneurship.
          </Typography>
          <div class={classes.heroButtons}>
            <Grid container spacings={2} justify="center">
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
        </container>
      </div>
    </React.Fragment>
  );
}

hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(hero);
