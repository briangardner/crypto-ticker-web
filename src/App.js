import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Ticker from './components/Ticker/Ticker';

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
    
    return <Ticker Symbols={this.state.coins} />
    // <table>
    //   {tableRows.map((row) => <tr>
    //     <td>{row.product_id}</td>
    //     <td>{row.price}</td>
    //     <td>{row.open_24h}</td>
    //   </tr>)}
      
    // </table>
  }

  
}
export default App;