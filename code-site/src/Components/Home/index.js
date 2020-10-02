import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import { MDBView, MDBMask } from 'mdbreact';
import withSiderLayout from './antLayout';
import AccountDash from '../Account/accountDash';
import SiderDemo from './SiderDemo';

const HomePage = () => (
  <>
    <SiderDemo />
    <Messages />
  </>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
  
)(HomePage);