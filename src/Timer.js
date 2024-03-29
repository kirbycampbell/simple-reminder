import React, { Component } from "react";

class Timer extends Component {
  state = {
    amount: "",
    set: false,
    time: null
  };
  setAmount = event => {
    this.setState({
      amount: event.target.value
    });
  };

  setTimer = () => {
    this.setState({
      set: !this.state.set,
      time: this.state.amount
    });
    this.countDown();
  };

  changeTime = () => {
    let num = this.state.amount - 1;
    this.setState({
      amount: num,
      time: num
    });
  };

  countDown = () => {
    if (this.state.amount >= 0) {
      this.interval = setInterval(() => this.changeTime(), 1000);
    }
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Set Timer"
            value={this.state.amount}
            onChange={this.setAmount}
            style={{ width: "30%", margin: "20px" }}
          />
          <br />
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={this.setTimer}
              value="Set Timer"
            >
              <button type="button" className="btn btn-secondary">
                Middle
              </button>
              Set Timer
            </button>
          </div>
        </div>
        <div>
          {this.state.set ? <div>{this.state.time}</div> : <div>Unset</div>}
        </div>
      </div>
    );
  }
}

export default Timer;
