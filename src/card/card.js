import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className={`card mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--${this.props.cols}-col ${this.props.className}`}
        onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  cols: React.PropTypes.number,
};

Card.defaultProps = {
  cols: 12,
};

export default Card;
