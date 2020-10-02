import AccountDash from '../Account/accountDash';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import React from 'react';
import '../../scss/style.scss';

export default function Dash() {

    return(
        <div className="flexible-content mt-24">
        <TopNavigation />
        <SideNavigation />
        <div id="content">
            <AccountDash />
        </div>
        </div>
    );
}