import React from 'react';
import { userRef } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
import Portal from '@material-ui/core/Portal';
import Album from '../Residents/album';
import LandingPage from '../Landing/landingpage';
import { mainFeaturedPost} from '../Landing/landinginfo';
import { Hidden } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import ContactUsPage from '../Contact Us/contactuspage';

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),

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
    float: 'left',
    flexGrow: 1,
  },
  mapContainer: {
    position: 'absolute',
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
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paper: {
    padding: theme.spacing(1),
    height: "100%",
    margin: 'auto',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',

  },
  footer: {
    backgroundcolor: 'text.secondary',
  }

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
  const { children, classes, value, index, direction, checked, ...other} = props;

  if(direction == true){
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        direction_right={value < index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        checked={value == index}
        {...other}
      >
        {value === index &&  (
          <Slide direction="left" in={value == index} mountOnEnter unmountOnExit>
          <Box p={3}>
            <Container>{children}</Container>
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
        {...other}
      >
        {value === index &&  (
          <Slide direction="right" in={value == index} mountOnEnter unmountOnExit>
          <Box p={3}>
            <Container maxWidth="false" disableGutters='true'>{children}</Container>
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

function a11yprops(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tab-${index}`,
  };
}

export default function MenuAppBar() {
  const classes = useStyles();
  const [direction, setDirection] = React.useState(false);
  const [prevPage, setPrevPage] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const [checked, setChecked] = React.useState(false);  

  const handleChange = (event, newValue) => {
    setPrevPage(value);
    setDirection((newValue > value));
    setValue(newValue);
    setShow(!show);
    setChecked(!checked);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Tabs 
            value={value} 
            checked={checked}
            onChange={handleChange} 
            aria-label="navigation-links"
            className={classes.tabBar}
            centered>
              <Tab label="About Code" {...a11yprops(0)}/>
              <Tab label="Residents" {...a11yprops(1)}/>
              <Tab label= "Sponsors and Partners" {...a11yprops(2)}/>
              <Tab label= "Resources" {...a11yprops(3)}/>
              <Tab label= "Contact Us" {...a11yprops(4)}/>
            </Tabs>
            
          
        </Toolbar>
      </AppBar>
      <React.Fragment>
      <TabPanel value={value} direction={direction} index={0}>
        <Container className={classes.container}>
                  <LandingPage post={mainFeaturedPost} classes={classes} width={1}/>
                
              </Container>
              </TabPanel>
            <TabPanel value={value} direction={direction} index={1}>
              <Box>
                <Album checked={true}/>
              </Box>
            </TabPanel>
            <TabPanel value={value} direction={direction} index={2}>
              Sponsors and Partners
            </TabPanel>
            <TabPanel value={value} direction={direction} index={3}>
              Resources
            </TabPanel>
            <TabPanel value={value} direction={direction} index={4}>
              <ContactUsPage></ContactUsPage>
            </TabPanel>
      </React.Fragment>
    </div>
  );
}