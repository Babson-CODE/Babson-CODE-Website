import React from "react";
import logo from "./logo.svg";
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import  Button from '@material-ui/core/Button';
import  IconButton from '@material-ui/core/IconButton';
import  MenuIcon from '@material-ui/icons/Menu';
import  Typography from '@material-ui/core/Typography';
import  MenuAppBar from './Components/Navigation/navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Subcomponents/theme';
import Footer from './Components/Footer';
import { withAuthentication } from './Components/Session';
import { mainFeaturedPost } from "./Components/Landing/landinginfo";
import Routes from './Components/Routes';
import Navigation from './Components/Navigation';
import FloatingButtons from './Subcomponents/floatingButtons';

/*        <MenuAppBar>
          Try #1
        </MenuAppBar> */

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          
          <main id="cont">
            <Routes />
            <FloatingButtons />
          </main>

      </ThemeProvider>
    </div>

  );
}

export default withAuthentication(App);
