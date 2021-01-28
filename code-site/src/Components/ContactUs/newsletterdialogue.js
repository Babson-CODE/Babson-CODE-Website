import React from "react";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NewsletterSignUpForm from "../Contact Us/newslettersignup";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/FormControlLabel";
import EmailIcon from "@material-ui/icons/Mail";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Formik, Field, Form } from "formik";
import { Autocomplete, ToggleButtonGroup, TextField } from 'formik-material-ui';
import Box from '@material-ui/core/Box';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Mailchimp from 'react-mailchimp-form';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


function ScrollTop(props) {
  const { children, window, value, index, classes, theme } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    //    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  const handleClickTop = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom
      in={trigger}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
      }}
    >
      <div
        onClick={handleClickTop}
        role="presentation"
        className={classes.toTop}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function NewsletterDialogue(props) {
  // const [open, setOpen] = React.useState(false);
  const { classes, value, theme, open, setOpen, ...other } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <React.Fragment>
      <ScrollTop value={value} index={0} classes={classes} theme={theme} {...other}>
              <Fab
                variant="extended"
                size="medium"
                aria-label="subscribe"
                color="primary"
                className={classes.subscribeFab}
                onClick={handleClickOpen}
              >
                <EmailIcon />
                Subscribe
              </Fab>

              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
                className={classes.toTopFab}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
