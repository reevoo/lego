import React from 'react';
import ReactDom from 'react-dom';

import mdl from 'material-design-lite/material.min';

export default Component => class extends React.Component {
  componentDidMount() {
    // componentHandler is a global object from MDL
    componentHandler.upgradeElement(ReactDom.findDOMNode(this));
  }

  componentDidUpdate() {
    // componentHandler is a global object from MDL
    componentHandler.downgradeElements(ReactDom.findDOMNode(this));
    componentHandler.upgradeElement(ReactDom.findDOMNode(this));
  }

  componentWillUnmount() {
    // componentHandler is a global object from MDL
    componentHandler.downgradeElements(ReactDom.findDOMNode(this));
  }

  render() {
    return <Component {...this.props} />;
  }
};
