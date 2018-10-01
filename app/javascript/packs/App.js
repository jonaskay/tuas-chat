import React, { Component } from 'react';
import ChatLog from './ChatLog';
import ChatForm from './ChatForm';

export default class App extends Component {
  render() {
    const wrapperStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%'
    }

    return (
      <div style={wrapperStyle}>
        <ChatLog />
        <ChatForm />
      </div>
    );
  }
}
