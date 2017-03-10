import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ChatBox from './components/ChatBox/ChatBox.jsx';
import ChatList from './components/ChatList/ChatList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: window.prompt('What\'s your name?'),
      messages: []
    };

    this.submitMessage = this.submitMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);

    this.getMessages();
  }

  getMessages() {
    axios.get('/api/message')
      .then(({ data }) => {
        this.setState({
          messages: data
        });
      })
      .catch(err => {
        console.error("Fucking thing failed", err);
      });
  }

  submitMessage(message) {
    axios.post('/api/message', {
      username: this.state.username,
      text: message
    })
      .then(({ data }) => {
        this.setState({
          messages: data
        });
      })
      .catch(err => {
        console.error("Fucking other thing failed", err);
      });
  }

  render() {
    return (
      <div>
        <ChatBox submitMessage={this.submitMessage} />
        <ChatList messages={this.state.messages} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
