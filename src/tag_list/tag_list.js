import React from 'react';
import BaseComponent from '../base_component';
import Tag from './tag';

class TagList extends BaseComponent {
  render() {
    let keyField = this.props.keyField;
    let labelField = this.props.labelField;

    return (
      <ul>
        {this.props.items.map(item =>
          <Tag key={keyField ? item[keyField] : item}
            label={labelField ? item[labelField] : item}
            onDelete={this.props.onDeleteItem(item)} />
        )}
      </ul>
    );
  }
}

TagList.propTypes = {
  items: React.PropTypes.array,
  keyField: React.PropTypes.string,
  labelField: React.PropTypes.string,
  onDeleteItem: React.PropTypes.func,
};

export default TagList;
