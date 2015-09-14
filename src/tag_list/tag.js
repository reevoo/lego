import React from 'react';
import BaseComponent from '../base-component';
import IconButton from '../icon_button/icon-button';

export default class Tag extends BaseComponent {
  render() {
    return (
      <li>
        {this.props.label}
        <IconButton icon='clear' onClick={this.props.onDelete} />
      </li>
    );
  }
}

Tag.propTypes = {
  label: React.PropTypes.string,
  onDelete: React.PropTypes.func,
};
