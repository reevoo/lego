import React from 'react';

import BaseComponent from '../base_component';
import Button from '../button/button';

class Form extends BaseComponent {
  render() {
    let title = this.props.title ? <h4>{this.props.title}</h4> : null;
    let submitLabel = this.props.submitLabel ? this.props.submitLabel : 'Send';

    return (
      <form className='card-form' onSubmit={this.props.onSubmit}>
        {title}
        {this.props.children}
        <Button type='submit'>{submitLabel}</Button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  submitLabel: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default Form;
