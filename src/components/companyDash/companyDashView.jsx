import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './companyDash.css';

import Routes from './routes.jsx';
import SideNav from '../sideNav/sideNav.jsx';

class CompanyDashView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="company-dashboard">
        <div className="container company-container">
          <SideNav />
          <Routes />
        </div>
      </div>
    )
  }
};

export default withRouter(CompanyDashView);
