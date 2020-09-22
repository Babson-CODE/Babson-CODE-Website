import React from 'react';
import { userRef } from 'react';
import { makeStyles, createMuiTheme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import Container from '@material-ui/core/Container';
import MapboxComp from '../Landing/map2';
import residentspage from '../Residents/residentspage';
import Button from '@material-ui/core/Button';
import Album from '../Residents/album';
import LandingPage from '../Landing/landingpage';
import { mainFeaturedPost} from '../Landing/landinginfo';
import { Hidden } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import ContactUsPage from '../Contact Us/contactuspage';
import MiniDrawer from '../Resources/resourcedrawer';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import codecover from '../Landing/code-cover.jpg';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import Codeicon from '../../Codefavicon';
import SVGIcon from '@material-ui/core/SvgIcon';
import Footer from '../Navigation/footer';
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewsletterSignUpForm from '../Contact Us/newslettersignup';
import Grid from '@material-ui/core/Grid';
import NewsletterDialogue from '../Contact Us/newsletterdialogue';

const theme = createMuiTheme();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0),
    height: '100vh',
  },
  container: {
    maxWidth: false,
    disableGutters: true,
  },
  heroHead: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    height: '90vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  palette: {
    primary: '#388e3c',
  },
  tabBar: {
    float: 'right',
//    flexGrow: 1,
  },
  iconButton:{
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mapContainer: {
    position: 'fixed',
    top: 0, 
    right: 0,
    left: 0,
    bottom: 0,
  },
  sidebarStyle: {
    display: 'inline-block',
    position: 'absolute',
    top:0,
    left: 0,
    margin: '12px',
    padding: '6px',
  },
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
    alignItems: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      paddingRight: 0,
    },
  },
  contactUsFooter: {
      position: 'relative',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
//    backgroundImage: {codecover},
//    maxWidth: '100%',
 //   maxHeight: '100%',
    width: '100vw'
  },
  albumImg:{
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
//    backgroundImage: {codecover},
    maxWidth: '100%',
    maxHeight: '100%',
//    width: '100vw',
//   height: '100vh',
  },
  albumContainer:{
    maxWidth: '100%',
    maxHeight: '100%',
  },
  albumDiv:{
    width:'100%',
    height: '100%',
//    overflow: 'hidden',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  imgPaper: {
 //   margin: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
//    padding: 20
  },
  footer: {
    backgroundcolor: 'text.secondary',
  },
  centerstyle: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  toTop:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuAppBar:{
    flexGrow: 0,
    elevation: 10,
  }, 
  tabPanelBox:{
    flexGrow: 1,
  },
  subscribeFab: {
    margin: theme.spacing(1),
    paddint: theme.spacing(1)
  },
  toTopFab: {
    margin: theme.spacing(1),
  },
}));

const styles = {
  root:{
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
        height: theme.spacing(18),
        margin: 'auto',
        maxWidth: 500,
      },
      image: {
        maxWidth: '100%',
        maxHeight: '100%',

      }
  }
};

function TabPanel(props) {
  const { children, classes, value, setValue, index, direction, checked, ...other} = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  if(direction == true){
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        direction_right={value < index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        checked={value == index}
        style={{flexGrow: 1}}
        {...other}
      >
        {value === index &&  (
          <Slide direction="left" in={value == index} mountOnEnter unmountOnExit>
          <Box display="flex">         
            <Container maxWidth={false}>{children}</Container>
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
        style={{flexGrow: 1}}
        {...other}
      >
        {value === index &&  (
          <Slide direction="right" in={value == index} mountOnEnter unmountOnExit>

          <Box display="flex">          
            <Container maxWidth={false}>{children}</Container>
          </Box>
          </Slide>
        )}
        
      </div>
    );
  }
}

function MapComponent(props){
  const { children, zoom, lat, lng, ...other} = props;

  return(
    <div
      role = "MapComponent"
      id = "Where we are"
    >
      {}
    </div>
  )
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
    'aria-controls': `wrapped-tab-${index}`,
  };
}

function ScrollTop(props) {
  const { children, window, value, index } = props;
  const classes = useStyles();
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
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger} timeout={transitionDuration}
    style={{transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
    }}>
      <div onClick={handleClickTop} role="presentation" className={classes.toTop}>
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



export default function MenuAppBar(props) {
  const classes = useStyles();
  const [direction, setDirection] = React.useState(false);
  const [prevPage, setPrevPage] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const [checked, setChecked] = React.useState(false);  
  const [auth, setAuth] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setPrevPage(value);
    setDirection((newValue > value));
    setValue(newValue);
    setShow(!show);
    setChecked(!checked);
  };

  return (
    <React.Fragment>
    <div className={classes.root}>
      <header>
        <ElevationScroll {...props}>
        <AppBar
        position="fixed"
        className={classes.menuAppBar}>
        <Toolbar className={classes.tabBar}>
          <IconButton edge="start" color="inherit" aria-label="code-icon" className={classes.menuButton}>
            <SVGIcon fontSize="large" viewBox="0 0 50 50">
            <Codeicon />
            </SVGIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Babson CODE
          </Typography>
          <Tabs 
            value={value} 
            checked={checked}
            onChange={handleChange} 
            aria-label="navigation-links"
            className={classes.tabBar}
            variant="scrollable">
              <Tab label="About Code" {...a11yprops(0)}/>
              <Tab label="Residents" {...a11yprops(1)}/>
              <Tab label= "Sponsors and Partners" {...a11yprops(2)}/>
              <Tab label= "Resources" {...a11yprops(3)}/>
              <Tab label= "Contact Us" {...a11yprops(4)}/>
            </Tabs>
            
          
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      </header>
      <main>
      <div id="back-to-top-anchor" />

      <TabPanel value={value} direction={direction} index={0}>

              <LandingPage post={mainFeaturedPost} classes={classes} width={1} {...props}/>
    
               <ScrollTop value={value} index={0} {...props}>

                <Fab variant="extended" size="medium" aria-label="subscribe" color='primary' className={classes.subscribeFab}
                onClick={handleClickOpen}>
                  <EmailIcon />
                       Subscribe
                 </Fab>
                 
                  <Fab color="secondary" size="small" aria-label="scroll back to top" className={classes.toTopFab}>
                  <KeyboardArrowUpIcon />
                </Fab>
               </ScrollTop>
               
              </TabPanel>

            <TabPanel value={value} direction={direction} index={1} className={classes.albumDiv}>
              <Box p={3} display="inline">
                <Container className={classes.albumContainer}>
                <Album checked={true}/>
                </Container>
                <ScrollTop value={value} index={0} {...props}>

                <Fab variant="extended" size="medium" aria-label="subscribe" color='primary' className={classes.toTopFab}
                onClick={handleClickOpen}>
                  <EmailIcon />
                      Subscribe
                 </Fab>
                 
                  <Fab color="secondary" size="small" aria-label="scroll back to top" className={classes.subscribeFab}>
                  <KeyboardArrowUpIcon />
                </Fab>
               </ScrollTop>
              </Box>
            </TabPanel>
            <TabPanel value={value} direction={direction} index={2}>
              Sponsors and Partners
              <ScrollTop {...props}>
                <Fab variant="extended" size="medium" aria-label="subscribe" color='primary' className={classes.toTopFab}
                onClick={handleClickOpen}>
                  <EmailIcon />
                      Subscribe
                 </Fab>
                 
                  <Fab color="secondary" size="small" aria-label="scroll back to top" className={classes.subscribeFab}>
                  <KeyboardArrowUpIcon />
                </Fab>
                </ScrollTop>
            </TabPanel>
            <TabPanel value={value} direction={direction} index={3}>
              
            </TabPanel>
            <TabPanel value={value} direction={direction} index={4}>
              <div>
                <Container>
                <ContactUsPage/>
                </Container>

              </div>
            </TabPanel>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
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
           <footer className={classes.footer}>
            <div>
            <Footer classes={classes}/>
            </div>
          </footer>
    </div>
    </React.Fragment>
  );
}
