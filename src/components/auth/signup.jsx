import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { authSignup } from '../../actions/authActions';

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordCheck: '',
      email: '',
      firstName: '',
      lastName: '',
    };
  }

  checkPW() {
    const { password, passwordCheck } = this.state;

    if (password === passwordCheck) {
      return true;
    }

    return false;
  }

  setUsername(text) {
    this.setState({
      username: text,
    });
  }

  setPW(text) {
    this.setState({
      password: text,
    });
  }

  setPWCheck(text) {
    this.setState({
      passwordCheck: text,
    });
  }

  setFirst(text) {
    this.setState({
      firstName: text,
    });
  }

  setLast(text) {
    this.setState({
      lastName: text,
    });
  }

  setEmail(text) {
    this.setState({
      email: text,
    });
  }

  render() {
    const { username, password, passwordCheck, firstName, lastName, email } = this.state;
    const { authorized, authSignup } = this.props;

    return (
      <div>
        <form>
          <div>
            <label htmlFor="auth-sign_username">Username</label>
            <input type="text" id="auth-sign_username" onChange={(e) => this.setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="auth-sign_pw">Password</label>
            <input type="password" id="auth-sign_pw" onChange={(e) => this.setPW(e.target.value)} />
          </div>
          <div>
            <label htmlFor="auth-sign_pwCheck">Re-type Password</label>
            <input type="password" id="auth-sign_pwCheck" onChange={(e) => this.setPWCheck(e.target.value)} />
          </div>
          <div>
            <label htmlFor="auth-sign_first">First Name</label>
            <input type="text" id="auth-sign-first" onChange={(e) => this.setFirst(e.target.value)} />
          </div>
          <div>
            <label htmlFor="auth-sign_last">Last Name</label>
            <input type="text" id="auth-sign_last" onChange={(e) => this.setLast(e.target.value)} />
          </div>
          <div>
            <label htmlFor="auth-sign_email">Email</label>
            <input type="text" id="auth-sign_email" onChange={(e) => this.setEmail(e.target.value)}  />
          </div>
          <button type="button" onClick={(e) => {
            e.preventDefault();
            if (this.checkPW()) {
              authSignup({ username, password, firstName, lastName, email }, 0);
            } else {
              alert(`Passwords do not match`);
            }
          }} >
            Sign Up
          </button>
        </form>
        <div>
          <Link to="/login">Login if you already have an account!</Link>
        </div>
      </div>
    )
  }
};

const SignupState = (state) => {
  return {
    authorized: state.auth.authorized,
  }
};

const SignupDispatch = (dispatch) => {
  return {
    authSignup: bindActionCreators(authSignup, dispatch),
  }
};

SignupPage.propTypes = {
  authorized: PropTypes.bool,
  authSignup: PropTypes.func,
};

export default connect(SignupState, SignupDispatch)(SignupPage);
