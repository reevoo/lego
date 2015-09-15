import React from 'react';

export default class Table extends React.Component {

  render() {
    return <table
      className='mdl-data-table mdl-js-data-table mdl-shadow--2dp'>
      {this.props.cols ?
        <thead><tr>{this.props.cols.map((col, i) => <th key={i}>{col}</th>)}</tr></thead>
        : null
      }
      <tbody>
        {this.props.children}
      </tbody>
    </table>;
  }
}
