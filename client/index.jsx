import React from 'react';
import ReactDOM from 'react-dom';

import ChatBox from './components/ChatBox/ChatBox.jsx';
import ChatList from './components/ChatList/ChatList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          username: "zak",
          text: "hello what's up"
        },
        {
          username: "summer",
          text: "hurry up"
        },
        {
          username: "felix",
          text: "i'm hella tired right now lol"
        }
      ]
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(message) {
    this.setState({
      messages: [...this.state.messages, message]
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
