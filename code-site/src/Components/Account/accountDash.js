import React, { Component } from 'react';
import Routes from '../Routes';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import './index.css';

class AccountDash extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          <TopNavigation />
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
        </div>
    );
  }
}

export default AccountDash;