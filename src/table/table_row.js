import React from 'react';

import TableCell from './table_cell';

export default class TableRow extends React.Component {

  render() {
    let item = this.props.item;

    return (
      <tr>
        {this.props.columns.map(column =>
          <TableCell key={column.label} numeric={this.props.numeric}>
            {column.content(item)}
          </TableCell>
        )}
      </tr>
    );
  }

}

TableRow.propTypes = {
  item: React.PropTypes.object.isRequired,
  columns: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string.isRequired,
    content: React.PropTypes.func.isRequired,
    numeric: React.PropTypes.bool,
  })).isRequired,
};