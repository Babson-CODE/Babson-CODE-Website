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
import ContactPage from '../Pages/contact';
import Dash from './Dashboard';
import * as ROUTES from '../Constants/routes';
import withSiderLayout from './Home/antLayout';
import SiderDemo from './Home/SiderDemo';
import Footer from './Footer';
import FileUploader from '../Pages/about';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
  
        <Route path='/dashboard' component={AccountDash} />

        <Route exact path={ROUTES.LANDING}>
          <Navigation />
          <Landed />
          <Footer />

        </Route>
        <Route path={ROUTES.ABOUT}>
          <Navigation />
          <FileUploader />
          <Footer />
        </Route>
          <Route path={ROUTES.SIGN_UP} >
            <Navigation />
            <SignUpPage />
            <Footer />
          </Route>
          <Route path={ROUTES.SIGN_IN} >
            <Navigation />
            <SignInPage />
            <Footer />
          </Route>
          <Route
            path={ROUTES.PASSWORD_FORGET}
            
          >
            <Navigation />
            <PasswordForgetPage />
            <Footer />
          </Route>
      
          <Route path={ROUTES.ACCOUNT}>
            <Navigation />
            <AccountPage />
            <Footer />
          </Route>
          <Route path={ROUTES.ADMIN} >
            <Navigation />
            <AdminPage />
            <Footer />
          </Route>
          <Route path={ROUTES.RESIDENTS} >
            <Navigation />
            <ResidentsPage />
            <Footer />
          </Route>
          <Route path={ROUTES.DASHBOARD} component={AccountDash}/>
          
          <Route path={ROUTES.CONTACT} >
            <Navigation />
            <ContactPage />
            <Footer />
          </Route>
          <Route path={ROUTES.HOME} component={SiderDemo} />
      </Switch>
    );
  }
}

export default Routes;
