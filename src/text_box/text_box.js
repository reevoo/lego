import React from 'react';
import ReactDom from 'react-dom';
import BaseComponent from '../base_component';
import mdl from '../mdl';

class TextBox extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = { value: props.value };

    this._bind('_getTextInput', '_handleChange');
  }

  componentDidMount() {
    if (this.props.onKeyDown) {
      this._getTextInput().addEventListener('keydown', this.props.onKeyDown);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  componentWillUnmount() {
    if (this.props.onKeyDown) {
      this._getTextInput().removeEventListener('keydown', this.props.onKeyDown);
    }
  }

  _getTextInput() {
    return ReactDom.findDOMNode(this.refs.textInput);
  }

  _handleChange(event) {
    this.setState({value: event.target.value}, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  }

  render() {
    let label = null;
    let inputClasses = ['mdl-textfield__input'];

    if (this.props.label) {
      label = <label
        className='mdl-textfield__label'
        htmlFor={this.props.id}>
        {this.props.label}
      </label>;
    }

    if (this.props.cursorPointer) {
      inputClasses.push('mdl-textfield--pointer');
    }

    return (
      <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
        <input
          id={this.props.id}
          ref='textInput'
          className={inputClasses.join(' ')}
          disabled={this.props.disabled}
          max={this.props.max}
          maxLength={this.props.maxLength}
          min={this.props.min}
          onChange={this._handleChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          placeholder={this.props.placeholder}
          type={this.props.type}
          required={this.props.required}
          value={this.state.value} />
        {label}
      </div>
    );
  }

}

TextBox.propTypes = {
  cursorPointer: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  max: React.PropTypes.number,
  maxLength: React.PropTypes.number,
  min: React.PropTypes.number,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  type: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default mdl(TextBox);
