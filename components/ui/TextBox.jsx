import React from 'react';

const { Component } = React;

class TextBox extends Component {
  render() {
    return (
      <span>{this.props.text}</span>
    )
  }
}

export default TextBox;
