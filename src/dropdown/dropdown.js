import React from 'react';
import ReactDom from 'react-dom';
import BaseComponent from '../base_component';

class Dropdown extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_handleChange', 'getWidth');

    this.state = {
      value: props.value,
      wrapperWidth: this.getWidth(),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.setState({wrapperWidth: this.getWidth()});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  setWidth() {
    let currentWidth = this.refs.select.offsetWidth;
    this.setState({wrapperWidth: currentWidth + 20});
  }

  render() {
    let label = this.props.label;
    let value = this.state.value;
    let items = this.props.items;

    return (
      <span className='mdl-dropdown' style={{width:`${wrapperWidth}px`}}>
        {label ? <div>{label}</div> : null}
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
