import React from 'react';
import {Table} from 'semantic-ui-react'
import TableHeaderCell from 'semantic-ui-react/dist/commonjs/collections/Table/TableHeaderCell';

class TickerHeader extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <Table.Header>
        <Table.Row>
          <TableHeaderCell>Symbol</TableHeaderCell>
          <TableHeaderCell>Open</TableHeaderCell>
          <TableHeaderCell>Last</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
          <TableHeaderCell>24h High</TableHeaderCell>
          <TableHeaderCell>24h Low</TableHeaderCell>
          <TableHeaderCell>24h Volume</TableHeaderCell>
        </Table.Row>
      </Table.Header>);
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default TickerHeader;
