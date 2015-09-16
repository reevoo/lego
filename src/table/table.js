import React from 'react';

import TableRow from './table_row';

export default class Table extends React.Component {

  render() {
    let headers = this.props.columns.map(column => ({
      key: item.key,
      label: item.label,
    }));

    return <table
      className='mdl-data-table mdl-js-data-table mdl-shadow--2dp'>
      {headers.length > 0 ?
        <thead>
          <tr>
            {headers.map(column => <th key={column.key}>{column.label}</th>)}
          </tr>
        </thead>
        : null
      }
      <tbody>
        {this.props.items
          .map(item => <TableRow item={item} columns={this.props.columns} />)}
      </tbody>
    </table>;
  }

}

Table.propTypes = {
  items: React.PropTypes.array.isRequired,
  columns: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    content: React.PropTypes.func.isRequired,
    numeric: React.PropTypes.bool,
  })).isRequired,
};
