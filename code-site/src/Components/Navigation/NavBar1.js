import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./CODE 2018 Logo.png";

const NavBar = () => (
  <div>
    <Navbar
      className="background-color nav-custom static-top sticky nav-bar-size"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <img alt="asfasf" src={logo} height="65px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end"></Nav>
          <Nav>
            <NavLink to="/" exact activeClassName="active" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about-us" exact activeClassName="active" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="/contact-us" exact activeClassName="active" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/residents" exact activeClassName="active" className="nav-link">
              Residents
            </NavLink>
            <NavLink to="/resources" exact activeClassName="active" className="nav-link">
              Resources
            </NavLink>
            <NavLink to="/partners" exact activeClassName="active" className="nav-link">
              Partners
            </NavLink>
            <NavLink to="/donate" exact activeClassName="active" className="nav-link">
              Donate
            </NavLink>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default NavBar;
