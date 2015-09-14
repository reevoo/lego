import React from 'react';
import BaseComponent from '../base_component';

export default class DropdownMenuItem extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_handleClick');
  }

  _handleClick() {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.value);
    }
  }

  render() {
    let selected = this.props.selected ? 'mdl-menu__item--active' : '';

    return (
      <li style={{opacity:1}}
        className={`mdl-menu__item ${selected}`}
        onClick={this._handleClick}>
        {this.props.label}
      </li>
    );
  }

}

DropdownMenuItem.propTypes = {
  label: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  selected: React.PropTypes.bool,
  value: React.PropTypes.any.isRequired,
};
