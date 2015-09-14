import React from 'react';
import ReactDom from 'react-dom';
import BaseComponent from '../base-component';
import mdl from '../mdl';

import AutocompleteMenu from './autocomplete-menu';
import TextBox from '../text_box/text_box';

const TAB = 9;
const ENTER = 13;
const ESCAPE = 27;
const SPACE = 32;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

class Autocomplete extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = this._getInitialState();

    this._bind(
      '_buildItems',
      '_closeList',
      '_getInitialState',
      '_handleBlur',
      '_handleClick',
      '_handleTextChange',
      '_handleKeyDown',
      '_selectItem',
      '_reset'
    );
  }

  render() {
    let autocompleteId = this.props.id;
    let items = this._buildItems(this.props.items);

    return (
      <div style={{position:'relative'}}>
        <TextBox
          id={autocompleteId}
          ref='textBox'
          type='text'
          label={this.props.label}
          onBlur={this._handleBlur}
          onFocus={this._onFocus}
          onChange={this._handleTextChange}
          onKeyDown={this._handleKeyDown}
          value={this.state.searchTerm} />

        <AutocompleteMenu
          triggerId={autocompleteId}
          defaultText='Type to search...'
          items={items}
          onClick={this._handleClick} />
      </div>
    );
  }

  _buildItems(items) {
    return items.map((item, index) => ({
      name: item[this.props.itemLabel],
      selected: index === this.state.selectedIndex,
      data: item
    }));
  }

  _closeList() {
    document.body.click(); // Close the menu by clicking outside
  }

  _getInitialState() {
    return {
      searchTerm: '',
      selectedIndex: -1
    };
  }

  _handleBlur() {
    // This timeout is required to avoid the menu closing before
    // the click event on the menu item is triggered
    const DELAY_FOR_BLUR = 100;
    setTimeout(() => {
      this._reset();
      this._closeList();
    }, DELAY_FOR_BLUR);
  }

  _handleClick(index) {
    return () => {
      let numItems = this.props.items.length;

      if (numItems > 0 && index >= 0) {
        let selectedItem = this.props.items[index];
        this._selectItem(selectedItem);
        this._reset();
      }
    }
  }

  _handleTextChange(value) {
    this.setState({selectedIndex: -1, searchTerm: value}, () => {
      if (value !== '') {
        this.props.onSearch(value);
      }
    });
  }

  _handleKeyDown(event) {
    let currentIndex = this.state.selectedIndex;
    let newIndex = null;
    let numItems = this.props.items.length;

    switch (event.keyCode) {

      case ENTER:
        event.preventDefault();

        if (numItems > 0 && currentIndex >= 0) {
          let selectedItem = this.props.items[currentIndex];
          this._selectItem(selectedItem);
          this._reset();
        }

        break;

      case ESCAPE:
        event.preventDefault();
        this._reset();
        break;

      case UP_ARROW:
        event.preventDefault();

        if (currentIndex > 0) {
          newIndex = currentIndex - 1;
        } else { // Select last element
          newIndex = numItems - 1;
        }

        this.setState({selectedIndex: newIndex});
        break;

      case DOWN_ARROW:
        event.preventDefault();

        if (currentIndex < (numItems - 1)) {
          newIndex = currentIndex + 1;
        } else { // Select first element
          newIndex = 0;
        }

        this.setState({selectedIndex: newIndex});
        break;
    }
  }

  _selectItem(item) {
    if (this.props.onSelect) {
      this.props.onSelect(item);
    }
  }

  _reset() {
    this.setState(this._getInitialState());
  }

}

Autocomplete.propTypes = {
  id: React.PropTypes.string.isRequired,
  items: React.PropTypes.array,
  label: React.PropTypes.string,
  itemLabel: React.PropTypes.string,
  onSearch: React.PropTypes.func.isRequired,
  onSelect: React.PropTypes.func,
};

export default mdl(Autocomplete);
