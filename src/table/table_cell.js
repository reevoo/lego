import React from 'react';

export default class TableCell extends React.Component {
  render() {
    return <td
      colSpan={this.props.colspan}
      className={!this.props.numeric ? 'mdl-data-table__cell--non-numeric' : null} >
      {this.props.children}
    </td>;
  }
}
