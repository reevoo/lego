import React from 'react';
import ReactDom from 'react-dom';
import BaseComponent from '../base_component';

class Dropdown extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_handleChange');

    this.state = {
      value: props.value,
      lastWidth: 0,
      wrapperWidth: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  componentDidUpdate() {
    let currentWidth = this.refs.select.offsetWidth;
    if (currentWidth !== this.state.lastWidth) {
      this.setState({
        lastWidth: currentWidth,
        wrapperWidth: currentWidth + 20,
      });
    }
  }

  render() {
    const label = this.props.label;
    const value = this.state.value;
    const items = this.props.items;
    const dropdown = (
      <span className='mdl-dropdown' style={{width:`${this.state.wrapperWidth}px`}}>
        <select
          ref='select'
          className='mdl-dropdown__select'
          onChange={this._handleChange}
          value={value}
          >
          {items.map(item =>
            <option value={item.value} key={item.value}>{item.label}</option>
          )}
        </select>
        <i className='material-icons mdl-dropdown__arrow'>expand_more</i>
      </span>
    );

    return label ?
      <span>
        <div>{label}</div>
        {dropdown}
      </span>
      :
      dropdown;
  }

  _handleChange(event) {
    this.setState({value: event.target.value}, () => {
      this.props.onSelect(this.state.value);
    });
  }

}

Dropdown.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  })).isRequired,
  label: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default Dropdown;
