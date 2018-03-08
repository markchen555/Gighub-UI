import React, { Component } from 'react';

const CompanySignup = ({ type, setUsername, setPW, setPWCheck, checkPW, push, signup }) => (
  <form>
    <div className="form-group">
      <label htmlFor="auth-sign_username">Company Name</label>
      <input type="text" id="auth-sign_username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="auth-sign_pw">Password</label>
      <input type="password" id="auth-sign_pw" className="form-control" onChange={(e) => setPW(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="auth-sign_pwCheck">Re-type Password</label>
      <input type="password" id="auth-sign_pwCheck" className="form-control" onChange={(e) => setPWCheck(e.target.value)} />
    </div>
    <div className="form-group login-submit">
      <button type="button" className="btn btn-outline-info" onClick={(e) => {
        e.preventDefault();
        push('/login');
      }} >
        Login
      </button>
      <button type="button" className="btn btn-outline-primary" onClick={(e) => {
        e.preventDefault();
        if (checkPW()) {
          signup(type);
        } else {
          alert(`Passwords do not match`);
        }
      }} >
        Sign Up
      </button>
    </div>
  </form>
);

export default CompanySignup;
