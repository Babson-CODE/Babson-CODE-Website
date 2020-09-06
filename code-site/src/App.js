import React from "react";
import logo from "./logo.svg";
import './App.css';
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import  IconButton from '@material-ui/core/IconButton';
// import  MenuIcon from '@material-ui/icons/MenuIcon';
// import  Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Button>a</Button>
         <Toolbar>
         <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          {/* <Typography variant="h6" >
            News
          </Typography> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
