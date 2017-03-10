import React from 'react';
import Message from './Message.jsx';

class ChatList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <strong>Messages:</strong>
        {this.props.messages.length ? this.props.messages.map((message) => <Message key={Math.random() * 100000} message={message} />) : null}
      </div>
    )
  }
}

export default ChatList;
