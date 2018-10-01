import React, { Component } from 'react';

export default class ChatLog extends Component {
  render() {
    const wrapperStyle = {
      border: '1px solid #000',
      height: '100%',
      marginBottom: 8,
      padding: 8
    }
    return (
      <div style={wrapperStyle}>
        {this.props.messages.map(message => {
          return (
            <div key={`message_${message.id}`} style={{ marginBottom: 8 }}>
              <span style={{ color: '#495057' }}>{message.created_at}</span>
              &nbsp;
              <span>{message.body}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
