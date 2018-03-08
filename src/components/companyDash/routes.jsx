import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CompanyJobsView from './companyJobs/companyJobsView.jsx';
import GenerateKey from './generate/companyGenerate.jsx';

class CompanyDashRoutes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/companyDash" component={CompanyJobsView} />
        <Route path="/companyDash/generate" component={GenerateKey} />
      </Switch>
    )
  }
};

export default CompanyDashRoutes;
