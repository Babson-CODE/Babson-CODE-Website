import React from "react"
import { Link } from "gatsby"

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavItem(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


const NavbarLinks = () => {
    return (
      <>
        <NavItem to="/">About</NavItem>
        <NavItem to="/404">Services</NavItem>
        <NavItem to="/">Gallery</NavItem>
        <NavItem to="/404">Contact</NavItem>
      </>
    )
  }
  
  export default NavbarLinks