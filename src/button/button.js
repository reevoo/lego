import React from 'react';
import mdl from '../mdl';

class Button extends React.Component {
  render() {
    let type = this.props.type ? this.props.type : 'button';

    return <button
      className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
      onClick={this.props.onClick}
      type={type}>
      {this.props.children}
    </button>;
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
};

export default mdl(Button);
