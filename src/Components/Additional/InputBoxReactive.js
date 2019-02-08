import React, { Component } from 'react';
import './css/InputBoxReactive.css';
class InputBoxReactive extends Component {
    render() {
      return (
        <div className="inputReactive">
          <input {...this.props} spellCheck="false" type={this.props.type} id={this.props.id} required="required" />
          <label htmlFor={this.props.id}>{this.props.title}</label>
          <div className="bar"></div>
          </div>
      );
    }
  }

  export default InputBoxReactive;