import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authorized } = this.props;

    return (
      <div>
        <Link to="/" >GigHub</Link>
        {
          authorized ?
          <Link to="/logout">Logout</Link> :
          <Link to="/login">Login</Link>
        }
      </div>
    )
  }
};

const NavbarState = (state) => {
  return {
    authorized: state.auth.authorized,
  }
};

Navbar.propTypes = {
  authorized: PropTypes.bool,
};

export default connect(NavbarState)(Navbar);
