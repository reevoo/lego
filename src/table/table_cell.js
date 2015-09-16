import React from 'react';

export default class TableCell extends React.Component {

  render() {
    return <td
      colSpan={this.props.colspan}
      className={this.props.numeric ? '' : 'mdl-data-table__cell--non-numeric'} >
      {this.props.children}
    </td>;
  }

}

TableCell.propTypes = {
  colspan: React.PropTypes.number,
  numeric: React.PropTypes.bool,
};
