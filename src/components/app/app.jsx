import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Routes from './routes.jsx';
import Navbar from '../navbar/navbar.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
};

export default withRouter(App);
