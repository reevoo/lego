import React from 'react';

export default class Topbar extends React.Component {

  render() {
    return (
      <header className='topbar mdl-layout__header'>
        <div className='mdl-layout__header-row'>
          <span className='mdl-layout-title'>{this.props.title}</span>
          <div className='mdl-layout-spacer'></div>
        </div>
      </header>
    );
  }
}

Topbar.propTypes = {
  title: React.PropTypes.string.isRequired,
};
