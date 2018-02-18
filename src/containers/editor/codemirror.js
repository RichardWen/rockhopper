import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js'

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "// Code"
    };
    this.options = {
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true
    };
  }

	updateCode(newCode) {
		this.setState({
			code: newCode,
		});
	}

	render() {
    return(
      <CodeMirror
        value={this.state.code}
        options={this.options}
        onBeforeChange={(editor, data, code) => {
          this.setState({code});
        }}
        onChange={(editor, data, code) => {
          this.updateCode(code);
        }}
      />);
	}
}

export default Editor;
