import React, { Component } from 'react';
import Pomodoro from './components/Pomodoro';
import './App.css';

const background = require('./tomatoes.jpg');

class App extends Component {

  render() {
    return (
      <div className="App" style={{background: `url(${background})`, backgroundSize: `cover`}}>
        <Pomodoro/>
      </div>
    );
  }
}

export default App;
