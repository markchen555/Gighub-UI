import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../landing/landing.jsx';
import LoginPage from '../auth/login.jsx';
import SignupPage from '../auth/signup.jsx';
import ProfilePage from '../profile/profile.jsx';

class AppRoutes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    )
  }
};

export default AppRoutes;
