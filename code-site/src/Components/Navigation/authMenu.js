import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../Constants/routes';
import * as ROLES from '../../Constants/roles';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tab from 'react-bootstrap/Tab';
import LandingPage from '../Landing/landingpage';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));


export default function NavigationAuthBar({authUser}) {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [key, setKey] = useState('home');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem><Link to={ROUTES.LANDING}>Landing</Link></MenuItem>

      <MenuItem><Link to={ROUTES.HOME}>Home</Link></MenuItem>
      <MenuItem><Link to={ROUTES.DASHBOARD}>Dashboard</Link></MenuItem>
      <MenuItem><Link to={ROUTES.ACCOUNT}>Account</Link></MenuItem>
    {!!authUser.roles[ROLES.ADMIN] && (
        <MenuItem><Link to={ROUTES.ADMIN}>Admin</Link></MenuItem>
    )}
    
      <MenuItem><SignOutButton /></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

    return(
        <>
        <Navbar expand="md" className="fixed-top scrolling transparent">
                            <Navbar.Brand href="/" className="navbarBrand">
                              <Link to={ROUTES.LANDING} className="text-white">
                                <img
                                  src="/codefavicon.svg"
                                  width="30"
                                  height="30"
                                  className="d-inline-block align-top"
                                  alt="Babson Code logo"
                                  />                              
                                Babson CODE
                              </Link>
                              </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="justify-content-start mr-auto" >
                                
                                    <Nav.Item>
                                        <Nav.Link as="div">
                                            <Link to="/" activeStyle={{color: 'white'}} active className="text-white activeLink">Home</Link>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as="div">
                                            <Link to="/about" activeStyle={{color: 'blue'}} active className="text-white activeLink">About Us</Link>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as="div">
                                            <Link to="/residents" activeStyle={{color: 'blue'}} active className="text-white activeLink">Residents</Link>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as="div">
                                            <Link to="/resources" activeStyle={{color: 'blue'}} active className="text-white activeLink">Resources</Link>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as="div">
                                            <Link to="/contact" activeStyle={{color: 'blue'}} active className="text-white activeLink">Contact Us</Link>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Nav>
                                    <Nav.Item>
                                    <div className={classes.grow} />
                                        <div className={classes.sectionDesktop}>
                                            <IconButton aria-label="show 4 new mails" color="inherit">
                                            <Badge badgeContent={4} color="secondary">
                                                <MailIcon />
                                            </Badge>
                                            </IconButton>
                                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                            <Badge badgeContent={17} color="secondary">
                                                <NotificationsIcon />
                                            </Badge>
                                            </IconButton>
                                            <IconButton
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit"
                                            >
                                            <AccountCircle />
                                            </IconButton>
                                        </div>
                                        <div className={classes.sectionMobile}>
                                            <IconButton
                                            aria-label="show more"
                                            aria-controls={mobileMenuId}
                                            aria-haspopup="true"
                                            onClick={handleMobileMenuOpen}
                                            color="inherit"
                                            >
                                            <MoreIcon />
                                            </IconButton>
                                        </div>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        {renderMobileMenu}
                        {renderMenu}
        </>
    );
}