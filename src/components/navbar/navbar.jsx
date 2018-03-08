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
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <Link className="navbar-brand" to="/" >GigHub</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              {
                authorized ? <Link className="nav-link" to="/profile">Profile</Link> : null
              }
            </li>
            <li className="nav-item active">
            {
              authorized ?
              <button type="button" className="btn btn-outline-secondary" onClick={(e) => {
                e.preventDefault();
                authLogout();
            }} >
              Logout
              </button> :
                <Link className="nav-link" to="/login">Login</Link>
            }
            </li>
          </ul>
        </div>
      </nav>
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
