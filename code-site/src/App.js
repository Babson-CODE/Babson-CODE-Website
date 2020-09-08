import React from "react";
import logo from "./logo.svg";
import './App.css';
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import  Button from '@material-ui/core/Button';
import  IconButton from '@material-ui/core/IconButton';
import  MenuIcon from '@material-ui/icons/Menu';
import  Typography from '@material-ui/core/Typography';
import  MenuAppBar from './Components/navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#388e3c',

    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MenuAppBar position="sticky">
          Try #1
        </MenuAppBar>
      </ThemeProvider>
    </div>
  );
}

export default App;
