import React, { Component } from "react";

import "./App.css";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
