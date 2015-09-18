import React from 'react';
import BaseComponent from '../base_component';
import Dropdown from './dropdown';
import TagList from '../tag_list/tag_list';

class DropdownTagList extends BaseComponent {

  render() {
    return (
      <div>
        <Dropdown
          id={this.props.id}
          items={this.props.sourceItems}
          value={this.props.label}
          onSelect={this.props.onSelect} />
        <TagList
          items={this.props.listItems}
          onDeleteItem={this.props.onDeleteItem}
          keyField={this.props.listKeyField}
          labelField={this.props.listLabelField} />
      </div>
    );
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
