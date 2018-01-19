import React from 'react';
import {Table, Transition} from 'semantic-ui-react'

class TickerRow extends React.Component {
  render() {
    //return <p>{this.state.someKey}</p>;
    return <Table.Row > 
        <Table.Cell>{this.props.Symbol.product_id}</Table.Cell>
        <Table.Cell>{this.props.Symbol.open_24h}</Table.Cell>
        <Table.Cell>{this.props.Symbol.price}</Table.Cell>
        <Table.Cell>{this.props.Symbol.price - this.props.Symbol.open_24h}</Table.Cell>
        <Table.Cell>{this.props.Symbol.high_24h}</Table.Cell>
        <Table.Cell>{this.props.Symbol.low_24h}</Table.Cell>
        <Table.Cell>{this.props.Symbol.volume_24h}</Table.Cell>
      </Table.Row>
    ;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default TickerRow;
