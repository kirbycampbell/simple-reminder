import React, { Component } from "react";

class Timer extends Component {
  state = {
    amount: "",
    set: false
  };
  setAmount = event => {
    console.log(event.target.value);
    this.setState({
      amount: event.target.value
    });
  };

  setTimer = () => {
    this.setState({
      set: !this.state.set
    });
  };
  render() {
    return (
      <div>
        {Date.now()}
        <div>
          <input
            type="text"
            placeholder="Set Timer"
            value={this.state.amount}
            onChange={this.setAmount}
            style={{ width: "60%" }}
          />
          <br />
          <input type="submit" onClick={this.setTimer} value="Set Timer" />
        </div>
        <div>{this.state.set ? <div>Set</div> : <div>Unset</div>}</div>
      </div>
    );
  }
}

export default Timer;
