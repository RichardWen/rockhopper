import React, { Component } from "react";
import Editor from "./components/editor/codemirror"

export default class App extends Component {
  render() {
    return (
      <div>
        <Editor></Editor>
      </div>
    );
  }
}
