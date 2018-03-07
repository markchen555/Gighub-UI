import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/" >GigHub</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
};

export default Navbar;
