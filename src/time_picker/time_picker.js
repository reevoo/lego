import React from 'react';
import BaseComponent from '../base_component';
import Dropdown from '../dropdown/dropdown';

function generateDropdownNumbers(to) {
  return [...Array(to).keys()]
    .map(value => value < 10 ? `0${value}` : `${value}`)
    .map(value => ({ label: value, value: value }));
}

const HOURS = generateDropdownNumbers(24);
const MINUTES = generateDropdownNumbers(60);
const DEFAULT_HOUR = '00';
const DEFAULT_MINUTES = '00';

class TimePicker extends BaseComponent {
  constructor() {
    super();
    this._bind('_getValue', '_updateHour', '_updateMinutes');
  }

  render() {
    const [hour, minutes] = this.props.value ?
      this.props.value.split(':') :
      [DEFAULT_HOUR, DEFAULT_MINUTES];

    return (
      <div>
        {this.props.label ? <div>{this.props.label}</div> : null}
        <Dropdown
          id={`${this.props.id}_hour_selector`}
          items={HOURS}
          value={hour}
          onSelect={this._updateHour(minutes)} />
        <Dropdown
          id={`${this.props.id}_minutes_selector`}
          items={MINUTES}
          value={minutes}
          onSelect={this._updateMinutes(hour)} />
      </div>
    );
  }

  _getValue(hour = DEFAULT_HOUR, minutes = DEFAULT_MINUTES) {
    return `${hour}:${minutes}`;
  }

  _updateHour(minutes) {
    return hour => this.props.onChange(this._getValue(hour, minutes));
  }

  _updateMinutes(hour) {
    return minutes => this.props.onChange(this._getValue(hour, minutes));
  }
}

TimePicker.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};

export default TimePicker;
