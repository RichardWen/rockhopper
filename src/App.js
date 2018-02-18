import React, { Component } from "react";
import Editor from "./containers/editor/codemirror";
import SignUp from "./containers/signup/signup";
import Login from "./containers/login/login";


export default class App extends Component {
  render() {
    return (
      <div>
        <Editor></Editor>
        <Login></Login>
        <SignUp></SignUp>
      </div>
    );
  }
}
