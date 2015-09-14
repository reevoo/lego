import React from 'react';

export default class IconButton extends React.Component {
  render() {
    let type = this.props.type ? this.props.type : 'button';

    return <button
      className='mdl-button mdl-js-button mdl-button--icon'
      onClick={this.props.onClick}
      type={type} >
      <i className='material-icons'>{this.props.icon}</i>
    </button>;
  }
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  type: React.PropTypes.string,
};
