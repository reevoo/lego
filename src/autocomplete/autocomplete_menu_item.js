import React from 'react';
import BaseComponent from '../base-component';

export default class AutocompleteMenuItem extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_handleClick');
  }

  render() {
    let selected = this.props.selected ? 'mdl-menu__item--active' : '';

    return (
      <li
        style={{opacity:1}}
        className={`mdl-menu__item ${selected}`}
        onClick={this._handleClick}>
        {this.props.children}
      </li>
    );
  }

  _handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

}

AutocompleteMenuItem.propTypes = {
  onClick: React.PropTypes.func,
  selected: React.PropTypes.bool,
};
