import React from "react";
import memberGrid from "./memberalbum";
import Members from "./Members";
import Hero from "./hero";
import { makeStyle, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";


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

export default function residentspage() {
  return (
    <Container>
        <Hero></Hero>
        <Members></Members>
    </Container>
  );
}

//residentspage.propTypes = {
//    classes: PropTypes.object.isRequired,
//};

//withStyles(styles)(residentspage);
