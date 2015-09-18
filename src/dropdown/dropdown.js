import React from 'react';
import BaseComponent from '../base_component';

class Dropdown extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_handleChange');

    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  render() {
    let label = this.props.label;
    let value = this.state.value;
    let items = this.props.items;

    return (
      <div className='mdl-dropdown'>
        {label ? <div>{label}</div> : null}
        <select
          className='mdl-dropdown__select'
          onChange={this._handleChange}
          value={value}
          >
          {items.map(item =>
            <option value={item.value} key={item.value}>{item.label}</option>
          )}
        </select>
      </div>
    );
  }

  // <i
  //   className='material-icons'
  //   style={{position:'absolute', right:0, bottom:'25px'}}
  //   >
  //   arrow_drop_down
  // </i>

  _handleChange(event) {
    this.setState({value: event.target.value}, () => {
      this.props.onSelect(value);
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
