import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import MapboxApp from '../Subcomponents/map';
import SvgIcon from '@material-ui/core/SvgIcon';

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
  }
}));

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <TabPanel value={value} index={0}>
             Home
              </TabPanel>
            <TabPanel value={value} index={1}>
              Residents
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
    </div>
  );
}