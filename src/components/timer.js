import React, { Component } from "react"
import "../pages/style.css"

class Timer extends Component {
  render() {
    let { hours } = this.props
    let timerClass = "timer"
    if (hours > 18) {
      timerClass = timerClass + " zero-quarter"
    } else if (hours > 12) {
      timerClass = timerClass + " one-quarter"
    } else if (hours > 6) {
      timerClass = timerClass + " two-quarter"
    } else if (hours > 0) {
      timerClass = timerClass + " three-quarter"
    }
    return <div className={timerClass}></div>
  }
}

export default Timer
