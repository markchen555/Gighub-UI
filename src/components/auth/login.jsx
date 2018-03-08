import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import { authLogin } from '../../actions/authActions';

import './auth.css';

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
    const { authLogin, authorized, failed, push } = this.props;

    const typeDetails = {
      0: 'Job Seeker',
      1: 'Company',
      2: 'Recruiter'
    };

    if (authorized) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="auth">
        <div className="container login-container">
          <div className="row justify-content-center login-row">
            <button type="button" className="btn btn-outline-secondary" onClick={(e) => {
              e.preventDefault();
              this.setType(0);
            }}>
              Job Seeker
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={(e) => {
              e.preventDefault();
              this.setType(1);
            }}>
              Company
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={(e) => {
              e.preventDefault();
              this.setType(2);
            }}>
              Recruiter
            </button>
          </div>
          <div className="row justify-content-center login-row">
            <h4>Logging in as: <strong>{ typeDetails[type] }</strong></h4>
          </div>
          <div className="row justify-content-center login-row">
            <form>
              <div className="form-group">
                <label htmlFor="auth-login_username">Username</label>
                <input type="text" id="auth-login_username" className="form-control" onChange={(e) => this.setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="auth-login_password">Password</label>
                <input type="password" id="auth-login_password" className="form-control" onChange={(e) => this.setPassword(e.target.value)} />
              </div>
              <div className="form-group login-submit">
                <button className="btn btn-outline-info" onClick={(e) => {
                  e.preventDefault();
                  push('/signup');
                }} >
                  Sign Up
                </button>
                <button className="btn btn-outline-primary" onClick={(e) => {
                  e.preventDefault();
                  authLogin({ username, password }, 0);
                }} >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
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
    push: bindActionCreators(push, dispatch),
  }
};

LoginPage.propTypes = {
  authorized: PropTypes.bool,
  failed: PropTypes.bool,
  authLogin: PropTypes.func,
};

export default connect(LoginState, LoginDispatch)(LoginPage);
