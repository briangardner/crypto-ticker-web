import React from 'react';
import {Table} from 'semantic-ui-react'

class TickerRow extends React.Component {
  constructor(){
    super();
    this.state = {
      rowClass : "tickerRow"
    }
  }

  componentWillReceiveProps(props){
    this.setState({rowClass: props.Symbol.side});
    
    setTimeout(() => {
      this.setState({rowClass: "tickerRow"});
      console.log()
    } , 100);
  }


  render() {
    let symbol = this.props.Symbol;
    return <Table.Row className={this.state.rowClass} > 
        <Table.Cell>{symbol.product_id}</Table.Cell>
        <Table.Cell>{symbol.open_24h}</Table.Cell>
        <Table.Cell>{symbol.price}</Table.Cell>
        <Table.Cell>{symbol.price - symbol.open_24h}</Table.Cell>
        <Table.Cell>{symbol.high_24h}</Table.Cell>
        <Table.Cell>{symbol.low_24h}</Table.Cell>
        <Table.Cell>{symbol.volume_24h}</Table.Cell>
      </Table.Row>
    ;
  }

}

export default TickerRow;
