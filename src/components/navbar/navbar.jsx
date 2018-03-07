import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { authLogout } from '../../actions/authActions';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authorized, authLogout } = this.props;

    return (
      <div>
        <Link to="/" >GigHub</Link>
        {
          authorized ?
          <button type="button" onClick={(e) => {
            e.preventDefault();
            authLogout();
          }} >
            Logout
          </button> :
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

const NavbarDispatch = (dispatch) => {
  return {
    authLogout: bindActionCreators(authLogout, dispatch),
  }
};

Navbar.propTypes = {
  authorized: PropTypes.bool,
  authLogout: PropTypes.func,
};

export default connect(NavbarState, NavbarDispatch)(Navbar);
