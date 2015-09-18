import React from 'react';
import BaseComponent from '../base_component';

class Dropdown extends BaseComponent {

  constructor() {
    super();

    this._bind('_buildItems', '_handleFocus');
  }

  render() {
    let items = this._buildItems(this.props.items);
    let label = this.props.label;

    return (
      <div style={{display:'inline-block'}}>
        {label ? <div>{label}</div> : null}
        <select onChange={this.props.onSelect}>
          {items.map(item =>
            <option value={item.value} selected={item.selected}>{item.label}</option>
          )}
        </select>
        <i className='material-icons' style={{position:'absolute', right:0, bottom:'25px'}}>arrow_drop_down</i>
      </div>
    );
  }

  _buildItems(items) {
    return items.map((item, index) => ({
      label: item.label,
      value: item.value,
      selected: item.value === this.props.value,
    }));
  }

}

Dropdown.propTypes = {
  items: React.PropTypes.array,
  label: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default Dropdown;
