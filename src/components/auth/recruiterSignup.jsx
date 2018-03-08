import React, { Component } from 'react';

const RecruiterSignup = ({ setUsername, setPW, setPWCheck, setFirst, setLast, setEmail, checkPW, signup, type, setToken, push }) => (
  <form>
    <div className="row">
      <div className="col col-lg-auto">
        <div className="form-group">
          <label htmlFor="auth-sign_username">Username</label>
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
      </div>
      <div className="col col-lg-auto">
        <div className="form-group">
          <label htmlFor="auth-sign_first">First Name</label>
          <input type="text" id="auth-sign-first" className="form-control" onChange={(e) => setFirst(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="auth-sign_last">Last Name</label>
          <input type="text" id="auth-sign_last" className="form-control" onChange={(e) => setLast(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="auth-sign_email">Email</label>
          <input type="text" id="auth-sign_email" className="form-control" onChange={(e) => setEmail(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="auth-sign_token">Enter Token here</label>
          <input type="text" id="auth-sign_token" className="form-control" onChange={(e) => setToken(e.target.value)}/>
        </div>
        <div className="form-group login-submit">
          <button type="button" className="btn btn-outline-info" onClick={(e) => {
            e.preventDefault();
            push('/login');
          }}>
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
      </div>
    </div>
  </form>
);

export default RecruiterSignup;
