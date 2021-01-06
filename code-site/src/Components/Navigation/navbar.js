import React from "react";
import { userRef } from "react";
import { makeStyles, createMuiTheme, useTheme, useMuiTheme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import Container from "@material-ui/core/Container";
import MapboxComp from "../Landing/map2";
import residentspage from "../Residents/residentspage";
import Button from "@material-ui/core/Button";
import Album from "../Residents/album";
import LandingPage from "../Landing/LandingPage";
import { mainFeaturedPost } from "../Landing/landinginfo";
import { Hidden } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import ContactUsPage from "../Contact Us/contactuspage";
import MiniDrawer from "../Resources/resourcedrawer";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import codecover from "../Landing/code-cover.jpg";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Codeicon from "../../Codefavicon";
import SVGIcon from "@material-ui/core/SvgIcon";
import StickyFooter from "./Footer";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NewsletterSignUpForm from "../Contact Us/newslettersignup";
import Grid from "@material-ui/core/Grid";
import NewsletterDialogue from "../Contact Us/newsletterdialogue";
import albumphoto from "../../Assets/img/thisisengineering.jpg";
import AboutUsPage from '../About Us/aboutuspage';
import aboutImage from '../../Assets/img/aboutBackgroundStock.jpg';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { theme } from '../../Subcomponents/theme';
import { styles } from '../../Subcomponents/styles';
import CSSBaseline from '@material-ui/core/CssBaseline';
import Tooltip from '@material-ui/core/Tooltip';

const drawerWidth = 240;
function TabPanel(props) {
  const {
    children,
    classes,
    value,
    setValue,
    index,
    direction,
    checked,
    ...other
  } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  if (direction == true) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        direction_right={value < index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        checked={value == index}
        style={{ flexGrow: 1 }}
        classes={classes}
        {...other}
      >
        {value === index && (
          <Slide
            direction="left"
            in={value == index}
            mountOnEnter
            unmountOnExit
          >
            <Box display="flex">
              <Container maxWidth={false} className={classes.tabPanelContainer}>{children}</Container>
            </Box>
          </Slide>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        direction_right={value < index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        checked={value == index}
        style={{ flexGrow: 1 }}
        classes={classes}
        {...other}
      >
        {value === index && (
          <Slide
            direction="right"
            in={value == index}
            mountOnEnter
            unmountOnExit
          >
            <Box display="flex">
              <Container maxWidth={false} className={classes.tabPanelContainer}>{children}</Container>
            </Box>
          </Slide>
        )}
      </div>
    );
  }
}

function MapComponent(props) {
  const { children, zoom, lat, lng, ...other } = props;

  return (
    <div role="MapComponent" id="Where we are">
      {}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function a11yprops(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tab-${index}`,
  };
}


function ScrollTop(props) {
  const { children, window, value, index, classes } = props;
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

  window: PropTypes.func,
};



function MenuAppBar(props) {
  const { classes } = props;
  const [direction, setDirection] = React.useState(false);
  const [prevPage, setPrevPage] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const greyText = blueGrey[50];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setPrevPage(value);
    setDirection(newValue > value);
    setValue(newValue);
    setShow(!show);
    setChecked(!checked);
  };

  return (
    <React.Fragment>
      <CSSBaseline />
      <div className={classes.root}>
        <header>
          <ElevationScroll {...props}>
            <AppBar position="fixed" className={classes.menuAppBar}>
              <Toolbar className={classes.tabBar}>


                <Tabs
                  value={value}
                  checked={checked}
                  onChange={handleChange}
                  aria-label="navigation-links"
                  className={classes.tabBar}
                  variant="scrollable"
                >
                  <Tab icon={<TabIcon />} aria-label="home" {...a11yprops(0)} ml="auto" className={classes.iconTab} />
                  <Tab label="About Code" {...a11yprops(1)} />
                  <Tab label="Residents" {...a11yprops(2)} />
                  <Tab label="Sponsors and Partners" {...a11yprops(3)} />
                  <Tab label="Resources" {...a11yprops(4)} />
                  <Tab label="Contact Us" {...a11yprops(5)} />
                </Tabs>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </header>
        <main className={classes.main}>
          <div id="back-to-top-anchor" />

          <TabPanel value={value} direction={direction} index={0} classes={classes}>
            <LandingPage
              post={mainFeaturedPost}
              classes={classes}
              width={1}
              {...props}
            />
            <ScrollTop value={value} index={0} classes={classes} theme={theme} {...props}>
              <Tooltip title="Subscribe">
                <Fab
                  size="small"
                  aria-label="subscribe"
                  color="primary"
                  className={classes.subscribeFab}
                  onClick={handleClickOpen}
                >
                  <EmailIcon />
                </Fab>
              </Tooltip>
              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
                className={classes.toTopFab}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>

            
          </TabPanel>
          <TabPanel 
            value={value}
            direction={direction}
            index={1}
            className={classes.aboutUsTab}
            classes={classes}>
              <Box className={classes.aboutUsBox}>
                <AboutUsPage classes={classes}/>

                
              </Box>
            </TabPanel>
          <TabPanel
            value={value}
            direction={direction}
            index={2}
            className={classes.albumTabPanel}
            classes={classes}
          >

                <Album checked={true} className={classes.album}/>

              
          </TabPanel>
          <TabPanel value={value} direction={direction} index={3} classes={classes}>
            Sponsors and Partners
            
          </TabPanel>
          <TabPanel value={value} direction={direction} index={4} classes={classes}></TabPanel>
          <TabPanel value={value} direction={direction} index={5} classes={classes}>
            <div>
              <Container>
                <ContactUsPage />
              </Container>
            </div>
          </TabPanel>
          
        
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

    </main>
    </div>
    <footer>          
      <Box>
        <Container>
      <StickyFooter> </StickyFooter>
      </Container>
      </Box>
    </footer>

    </React.Fragment>
  );
}

function TabIcon(){
  return(
    <SVGIcon fontSize="large" viewBox="0 0 50 50">
    <Codeicon />
  </SVGIcon>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);