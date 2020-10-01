import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from '../Pages/DashboardPage';
import ProfilePage from '../Pages/ProfilePage';
import TablesPage from '../Pages/TablesPage';
import MapsPage from '../Pages/MapsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import Navigation from './Navigation';
import Landed from './Landing/landingpage';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import AdminPage from './Admin';
import ResidentsPage from '../Pages/residents';
import AccountDash from './Account/accountDash';


import * as ROUTES from '../Constants/routes';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
  
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
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
          <Route path={ROUTES.DASHBOARD} component={AccountDash} />
      </Switch>
    );
  }
}

export default Routes;
