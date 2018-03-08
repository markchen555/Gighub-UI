import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Routes from './routes.jsx';
import SideNav from '../sideNav/sideNav.jsx';

class CompanyDashView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SideNav />
        <Routes />
      </div>
    )
  }
};

export default withRouter(CompanyDashView);
