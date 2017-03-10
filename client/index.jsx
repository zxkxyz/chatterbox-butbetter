import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>Hello world what up lol</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
