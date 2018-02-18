import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Log in to The Coding School</h1>
        <input type="text" name="email" placeholder="Email" /><br/>
        <input type="password" name="password" placeholder="Password" /><br/>
        <input type="submit" />
      </div>
    );
  }
}

export default Login;
