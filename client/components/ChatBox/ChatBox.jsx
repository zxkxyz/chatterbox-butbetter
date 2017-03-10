import React from 'react';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    super(props);

    this.updateText = this.updateText.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  updateText(e) {
    this.setState({
      message: e.target.value
    });
  }

  submitMessage() {
    this.props.submitMessage(this.state.message);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateText} />
        <button onClick={this.submitMessage}>Submit</button>
      </div>
    )
  }
}

export default ChatBox;
