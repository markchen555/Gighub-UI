import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { authLogin } from '../../actions/authActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      type: 0,
    };
  }

  setType(num) {
    this.setState({
      type: num,
    });
  }

  setUsername(text) {
    this.setState({
      username: text,
    });
  }

  setPassword(text) {
    this.setState({
      password: text,
    });
  }

  render() {
    const { username, password, type } = this.state;
    const { authLogin, authorized, failed } = this.props;

    const typeDetails = {
      0: 'User',
      1: 'Company',
      2: 'Recruiter'
    };

    if (authorized) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div>
        <div>
          <button type="button" onClick={(e) => {
            e.preventDefault();
            this.setType(0);
          }}>
            Job Seeker
          </button>
          <button type="button" onClick={(e) => {
            e.preventDefault();
            this.setType(1);
          }}>
            Company
          </button>
          <button type="button" onClick={(e) => {
            e.preventDefault();
            this.setType(2);
          }}>
            Recruiter
          </button>
        </div>
        <div>
          { typeDetails[type] }
        </div>
        <form>
          <div>
            <label htmlFor="auth-login_username">Username</label>
            <input type="text" id="auth-login_username" onChange={(e) => this.setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="auth-login_password">Password</label>
            <input type="password" id="auth-login_password" onChange={(e) => this.setPassword(e.target.value)} />
          </div>
          <button type="button" onClick={(e) => {
            e.preventDefault();
            authLogin({ username, password }, 0);
          }} >
            Login
          </button>
        </form>
        <Link to="/signup">Sign up</Link>
      </div>
    )
  }
};

const LoginState = (state) => {
  return {
    authorized: state.auth.authorized,
    failed: state.auth.failed,
  }
};

const LoginDispatch = (dispatch) => {
  return {
    authLogin: bindActionCreators(authLogin, dispatch),
  }
};

LoginPage.propTypes = {
  authorized: PropTypes.bool,
  failed: PropTypes.bool,
  authLogin: PropTypes.func,
};

export default connect(LoginState, LoginDispatch)(LoginPage);
