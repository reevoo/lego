import React from 'react';
import mdl from '../mdl';
import BaseComponent from '../base_component';

import DropdownMenuItem from './dropdown_menu_item';

class DropdownMenu extends React.Component {

  render() {
    return (
      <ul className='mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect'
        htmlFor={this.props.triggerId}
        style={this.props.style}>
        {this.props.items.map((item, i) =>
          <DropdownMenuItem key={i}
            label={item.label}
            value={item.value}
            selected={item.selected}
            onSelect={this.props.onSelect} />
        )}
      </ul>
    );
  }

}

DropdownMenu.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]).isRequired,
  })),
  onSelect: React.PropTypes.func,
  style: React.PropTypes.object,
  triggerId: React.PropTypes.string.isRequired,
};

export default mdl(DropdownMenu);
