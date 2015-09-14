import React from 'react';
import BaseComponent from '../base-component';
import Autocomplete from './autocomplete';
import TagList from '../tag_list/tag_list';

export default class AutocompleteTagList extends BaseComponent {
  render() {
    return (
      <div>
        <Autocomplete
          id={this.props.id}
          label={this.props.label}
          items={this.props.sourceItems}
          itemLabel={this.props.labelForSource}
          onSearch={this.props.onSearch}
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

AutocompleteTagList.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  labelForSource: React.PropTypes.string,
  listItems: React.PropTypes.array,
  listKeyField: React.PropTypes.string,
  listLabelField: React.PropTypes.string,
  onDeleteItem: React.PropTypes.func,
  onSearch: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  sourceItems: React.PropTypes.array,
};
