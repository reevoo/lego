import React from 'react';
import BaseComponent from '../base_component';
import TextBox from './text_box/text_box';

class DateIntervalPicker extends BaseComponent {
  constructor() {
    super();

    this._bind('_updateValue');
    this.fields = [];
  }

  componentWillReceiveProps(nextProps) {
    this.fields = [
      {
        key: 'years',
        label: 'Years',
        min: 1,
        value: nextProps.years,
      },
      {
        key: 'months',
        label: 'Months',
        min: 1,
        value: nextProps.months,
      },
      {
        key: 'days',
        label: 'days',
        min: 1,
        value: nextProps.days,
      },
    ];
  }

  render() {
    return (
      <div>
        {this.props.label ? <div>{this.props.label}</div> : null}
        {this.fields.map(field =>
          <TextBox
            key={field.key}
            type='number'
            min={field.min}
            label={field.label}
            value={field.value}
            onChange={this._updateValue(field.key)} />
        )}
      </div>
    );
  }

  _updateValue(key) {
    return value => {
      let map = new Map();

      this.fields.forEach(field => {
        let name = field.key;
        if (key === name && value > field.min) {
          map.set(name, value);
        } else if (key !== name && this.props[name]) {
          map.set(name, this.props[name]);
        }
      });

      this.props.onChange(map);
    };
  }
}

DateIntervalPicker.propTypes = {
  days: React.PropTypes.number,
  label: React.PropTypes.string,
  months: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
  years: React.PropTypes.number,
};

export default DateIntervalPicker;
