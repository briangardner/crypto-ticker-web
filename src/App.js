import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Ticker from './components/Ticker/Ticker';
import GoogleAd from 'react-google-ad';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001",
      coins : {}
    };
  }

   handleData(data) {
    console.log(data);
    this.setState((state) => {
      state.coins[data.product_id] = data;
      return state;
    })
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromGDAX", (data) => this.handleData(data))
  }
  render() {
    
    return <div className="ui container">
      <div className="ui one column grid stackable">
        <div className="column">
          <Ticker Symbols={this.state.coins} />
        </div>
      </div>
    </div>;
  }

  
}
export default App;