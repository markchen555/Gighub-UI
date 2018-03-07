import React, { Component } from 'react';

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    };
  }

  render() {
    return (
      <div>
        Sign Up!
      </div>
    )
  }
};

export default SignupPage;
