import React from "react";
import logo from "./logo.svg";
import './App.css';
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

import Navigation from './Components/Navigation';
import Landed from './Components/Landing/landingpage';
import SignUpPage from './Components/SignUp';
import SignInPage from './Components/SignIn';
import PasswordForgetPage from './Components/PasswordForget';
import HomePage from './Components/Home';
import AccountPage from './Components/Account';
import AdminPage from './Components/Admin';
import ResidentsPage from './Pages/residents';
import * as ROUTES from './Constants/routes';
import { withAuthentication } from './Components/Session';
import DashBoard from './Components/Dashboard/dashboard';
/*        <MenuAppBar>
          Try #1
        </MenuAppBar> */

function App() {
  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={theme}>

        
        <div>
          <Navigation />

          <hr />

          <Route exact path={ROUTES.LANDING} component={Landed} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.RESIDENTS} component={ResidentsPage} />
          <Route path={ROUTES.DASHBOARD} component={DashBoard}/>
        </div>
      
      </ThemeProvider>
    </div>
    </Router>
  );
}

export default withAuthentication(App);
