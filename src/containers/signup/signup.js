import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Create an Account for The Coding School</h1>
        <input type="text" name="email" placeholder="Email" /><br/>
        <input type="password" name="password" placeholder="Password" /><br/>
        <input type="password" name="password" placeholder="Confirm Password" /><br/>
        <input type="submit" />
      </div>
    );
  }
}

export default SignUp;
