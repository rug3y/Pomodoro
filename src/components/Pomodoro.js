import React, { Component } from 'react';
import Timer from './Timer'

class Pomodoro extends Component {
  render() {
    return (
      <div>
        <h1 class="title">Pomodoro</h1>
        <Timer/>
      </div>
    )
  }
}
export default Pomodoro;