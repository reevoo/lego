import React from 'react';
import BaseComponent from '../base_component';
import Button from '../button/button';
import Dropdown from './dropdown';
import TagList from '../tag_list/tag_list';

class DropdownTagList extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_handleClick', '_handleSelect');

    this.state = {
      value: props.sourceItems[0] ? props.sourceItems[0].value : null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.sourceItems[0] ? nextProps.sourceItems[0].value : null,
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.label}</div>
        <Dropdown
          id={this.props.id}
          items={this.props.sourceItems}
          value={this.state.value}
          onSelect={this._handleSelect}
          />
        <Button onClick={this._handleClick}>Add</Button>
        <TagList
          items={this.props.listItems}
          onDeleteItem={this.props.onDeleteItem}
          keyField={this.props.listKeyField}
          labelField={this.props.listLabelField} />
      </div>
    );
  }

  _handleClick() {
    this.props.onSelect(this.state.value);
  }

  _handleSelect(value) {
    this.setState({value: value});
  }

}

DropdownTagList.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  listItems: React.PropTypes.array,
  listKeyField: React.PropTypes.string,
  listLabelField: React.PropTypes.string,
  onDeleteItem: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  sourceItems: React.PropTypes.array,
};

export default DropdownTagList;
