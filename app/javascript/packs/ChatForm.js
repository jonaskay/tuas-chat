import React, { Component } from 'react';

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const wrapperStyle = {
      display: 'flex',
    };
    const textStyle = {
      border: '1px solid #000',
      display: 'block',
      flexGrow: 1,
      height: '1rem',
      marginRight: '.5rem',
      padding: 8
    };
    const submitStyle = {
      background: '#000',
      border: '1px solid #000',
      borderRadius: '.25rem',
      boxSizing: 'content-box',
      color: '#FFF',
      cursor: 'pointer',
      display: 'block',
      flex: 'none',
      height: '1rem',
      padding: 8,
      width: '3rem'
    };

    return (
      <form onSubmit={this.props.handleSubmit()} style={wrapperStyle}>
        <input
          type="text"
          style={textStyle}
          value={this.state.value}
          onChange={this.handleChange} />
        <input type="submit" value="Send" style={submitStyle} />
      </form>
    );
  }
}
