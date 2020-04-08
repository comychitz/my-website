import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome() {
  return <h1>Welcome!</h1>;
}

function Logo() {
  return (
    <img src={logo} className="App-logo" alt="logo"/>
  );
}

type ClockState = {
  time: Date
}

class Clock extends React.Component<{}, ClockState> {
  tick() {
    this.setState({
      time: new Date()
    });
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.tick();
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  // render will know everything!
  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        <Logo/>
        <Clock />
      </header>
    </div>
  );
}

export default App;
