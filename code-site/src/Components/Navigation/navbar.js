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

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  }
};

function TabPanel(props) {
  const { children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Container>{children}</Container>
        </Box>
      )}
    </div>
  );
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
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShow(!show);
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
      <TabPanel value={value} index={0}>
            
              <Container>
                <MapboxComp></MapboxComp>
              </Container>
              </TabPanel>
            <TabPanel value={value} index={1}>
              <Box>
                <Album/>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              Sponsors and Partners
            </TabPanel>
            <TabPanel value={value} index={3}>
              Resources
            </TabPanel>
            <TabPanel value={value} index={4}>
              Contact Us
            </TabPanel>
      </React.Fragment>
    </div>
  );
}