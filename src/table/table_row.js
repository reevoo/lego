import React from 'react';

import Button from '../button/button';
import TableCell from './table_cell';

export default class TableRow extends React.Component {

  render() {
    return (
      <tr>
        {this.props.children}
        {this.props.editItem ? <TableCell><Button onClick={this.props.editItem}>Edit</Button></TableCell> : null}
        {this.props.deleteItem ? <TableCell><Button onClick={this.props.deleteItem}>Delete</Button></TableCell> : null}
      </tr>
    );
  }

}
