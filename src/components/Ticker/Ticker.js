import React from 'react';
import TickerHeader from './TickerHeader';
import TickerRow from './TickerRow'; 
import {Table} from "semantic-ui-react";

class Ticker extends React.Component {

  render() {
    var symbols = [];
    Object.keys(this.props.Symbols).map((symbol) => symbols.push(this.props.Symbols[symbol]));
    return (
      <Table className="ui celled table unstackable">
        <TickerHeader></TickerHeader>
        <Table.Body>
          {symbols.map((symbol) => 
            <TickerRow key={symbol.sequence} Symbol={symbol}/>
          )}
        </Table.Body>
        
      </Table>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Ticker;
