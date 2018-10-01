import React, { Component } from 'react';
import ActionCable from 'actioncable';
import ChatLog from './ChatLog';
import ChatForm from './ChatForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.createSocket();
  }

  createSocket() {
    const url = new URL(window.location.href);
    const host = [url.hostname, url.port].join(':');
    const cable = ActionCable.createConsumer(`wss://${host}/cable`);
    const chat = cable.subscriptions.create(
      { channel: 'ChatChannel' },
      {
        connected: () => {},
        received: data => {
          let messages = this.state.messages;
          messages.push(data);
          this.setState({ messages: messages });
        },
        create: function(messageBody) {
          this.perform('create', {
            body: messageBody
          });
        }
      }
    )

    this.setState({ chat: chat });
  }

  handleSubmit(messageBody) {
    this.state.chat.create(messageBody);
  }

  render() {
    const wrapperStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%'
    }

    return (
      <div style={wrapperStyle}>
        <ChatLog messages={this.state.messages} />
        <ChatForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
