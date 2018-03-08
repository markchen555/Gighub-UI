import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import { authSignup, companySignup, recruiterSignup } from '../../actions/authActions';

import './auth.css';

import UserSignup from './userSignup.jsx';
import CompanySignup from './companySignup.jsx';
import RecruiterSignup from './recruiterSignup.jsx';

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
      token: '',
      type: 0,
    };

    this.setEmail = this.setEmail.bind(this);
    this.setFirst = this.setFirst.bind(this);
    this.setLast = this.setLast.bind(this);
    this.setPW = this.setPW.bind(this);
    this.setPWCheck = this.setPWCheck.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.checkPW = this.checkPW.bind(this);
    this.setToken = this.setToken.bind(this);
    this.signup = this.signup.bind(this);
  }

  checkPW() {
    const { password, passwordCheck } = this.state;

    if (password === passwordCheck) {
      return true;
    }

    return false;
  }

  setToken(text) {
    this.setState({
      token: text,
    });
  }

  setType(num) {
    this.setState({
      type: num,
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      firstName: '',
      lastName: '',
      token: '',
    });
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

  signup(type) {
    const { username, password, firstName, lastName, email, token } = this.state;

    const loginObj = {
      username,
      password,
    };

    if (type === 0 || type === 2) {
      loginObj.firstName = firstName;
      loginObj.lastName = lastName;
      loginObj.email = email;
    }

    if (type === 2) {
      loginObj.SUKey = token;
    }

    if (type === 0) {
      this.props.authSignup(loginObj, type);
    }

    if (type === 1) {
      this.props.companySignup(loginObj, type);
    }

    if (type === 2) {
      this.props.recruiterSignup(loginObj, type);
    }
  }

  render() {
    const { username, password, passwordCheck, firstName, lastName, email, type, token } = this.state;
    const { authorized, push } = this.props;

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
            <h4>Signing up as: <strong>{ typeDetails[type] }</strong></h4>
          </div>
          <div className="row justify-content-center login-row">
            {
              type === 0 &&
              <UserSignup type={type} setUsername={this.setUsername} setEmail={this.setEmail} setFirst={this.setFirst} setLast={this.setLast} setPW={this.setPW} setPWCheck={this.setPWCheck} signup={this.signup} checkPW={this.checkPW} push={push} />
            }
            {
              type === 1 &&
              <CompanySignup type={type} setUsername={this.setUsername} setPW={this.setPW} setPWCheck={this.setPWCheck} checkPW={this.checkPW} push={push} signup={this.signup} />
            }
            {
              type === 2 &&
              <RecruiterSignup type={type} setUsername={this.setUsername} setEmail={this.setEmail} setFirst={this.setFirst} setLast={this.setLast} setPW={this.setPW} setPWCheck={this.setPWCheck} signup={this.signup} checkPW={this.checkPW} push={push} setToken={this.setToken} />
            }
          </div>
          
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
    push: bindActionCreators(push, dispatch),
    companySignup: bindActionCreators(companySignup, dispatch),
    recruiterSignup: bindActionCreators(recruiterSignup, dispatch),
  }
};

SignupPage.propTypes = {
  authorized: PropTypes.bool,
  authSignup: PropTypes.func,
};

export default connect(SignupState, SignupDispatch)(SignupPage);
