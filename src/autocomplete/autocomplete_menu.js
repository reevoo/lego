import React from 'react';
import mdl from '../mdl';
import AutocompleteMenuItem from './autocomplete_menu_item';

class AutocompleteMenu extends React.Component {

  componentDidUpdate(prevProps) {
    let currentNumItems = this.props.items.length;
    let previousNumItems = prevProps.items.length;

    if (currentNumItems !== previousNumItems) {
      let trigger = document.getElementById(this.props.triggerId);
      trigger.click(); // Close
      trigger.click(); // Open
    }
  }

  render() {
    let items = [];
    let style = {};

    if (this.props.items.length > 0) {
      items = this.props.items.map(
        (item, index) => <AutocompleteMenuItem
          key={item.name}
          selected={item.selected}
          onClick={this.props.onClick(index)}>
          {item.name}
        </AutocompleteMenuItem>
      );
    } else {
      style = {display:'none'};
    }

    return (
      <ul
        className='mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect'
        htmlFor={this.props.triggerId}
        style={style}>
        {items}
      </ul>
    );
  }

}

AutocompleteMenu.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    data: React.PropTypes.any.isRequired,
    name: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
  })),
  onClick: React.PropTypes.func,
  triggerId: React.PropTypes.string.isRequired,
};

export default mdl(AutocompleteMenu);
