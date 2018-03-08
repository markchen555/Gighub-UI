import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link exact="true" to="/companyDash">Jobs</Link>
        <Link to="/companyDash/generate">Generate Key</Link>
      </div>
    )
  }
};

export default SideNav;
