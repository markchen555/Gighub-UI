import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Routes from './routes.jsx';
import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';

import './app.css'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-wrapper">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    )
  }
};

export default withRouter(App);
