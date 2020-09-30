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

export default function NavigationNonAuthBar( ){
    const [key, setKey] = useState('home');

    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="fixed-top scrolling transparent">
        <Navbar.Brand><Link to={ROUTES.LANDING}>Babson CODE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to={ROUTES.HOME}>Home</Link></Nav.Link>
            <Nav.Link><Link to={ROUTES.ABOUT}>About us</Link></Nav.Link>
            <Nav.Link><Link to={ROUTES.RESIDENTS}>Residents</Link></Nav.Link>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Coding</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">PM</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link ><Link to={ROUTES.SIGN_IN} >Login</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    );
}