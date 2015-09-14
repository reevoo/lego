import React from 'react';
import BaseComponent from '../base_component';

import DropdownMenu from './dropdown_menu';
import TextBox from '../text_box/text_box';

export default class Dropdown extends BaseComponent {

  constructor() {
    super();

    this._bind('_buildItems', '_handleFocus');
  }

  render() {
    let dropdownId = this.props.id;
    let items = this._buildItems(this.props.items);
    let label = this.props.label;
    let value = this.props.value;

    return (
      <div style={{position:'relative'}}>
        <TextBox
          id={dropdownId}
          type='text'
          label={label}
          value={value}
          cursorPointer={true}
          onFocus={this._handleFocus} />
        <i className='material-icons' style={{position:'absolute', right:0, bottom:'25px'}}>arrow_drop_down</i>

        <DropdownMenu
          triggerId={dropdownId}
          items={items}
          onSelect={this.props.onSelect} />
      </div>
    );
  }

  _buildItems(items) {
    return items.map((item, index) => ({
      label: item.label,
      value: item.value,
      selected: item.value === this.props.value
    }));
  }

  _handleFocus(event) {
    // Removes the cursor when the textbox receives the click
    event.target.blur();
  }

}

Dropdown.propTypes = {
  id: React.PropTypes.string.isRequired,
  items: React.PropTypes.array,
  label: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  value: React.PropTypes.string,
};
