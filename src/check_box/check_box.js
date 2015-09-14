import React from 'react';
import BaseComponent from '../base_component';

const DEFAULT_TYPE = 'checkbox'; // switch is the other option

export default class CheckBox extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = { checked: props.checked };

    this._bind('handleChange');
  }

  handleChange(event) {
    this.setState({checked: event.target.checked});
  }

  render() {
    let type = this.props.type ? this.props.type : DEFAULT_TYPE;

    return (
      <label className={`mdl-${type} mdl-js-${type} mdl-js-ripple-effect`} for={this.props.id}>
        <input
          id={this.props.id}
          className={`mdl-${type}__input`}
          onChange={this.handleChange}
          type='checkbox'
          checked={this.state.checked}
           />
         <span className={`mdl-${type}__label`}>{this.props.label}</span>
      </label>
    );
  }

}

CheckBox.propTypes = {
  checked: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf([DEFAULT_TYPE, 'switch']),
};
