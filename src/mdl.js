import React from 'react';
import ReactDom from 'react-dom';

import mdl from 'material-design-lite/material.min';

export default Component => class extends React.Component {
  componentDidMount() {
    mdl.componentHandler.upgradeElement(ReactDom.findDOMNode(this));
  }

  componentDidUpdate() {
    mdl.componentHandler.downgradeElements(ReactDom.findDOMNode(this));
    mdl.componentHandler.upgradeElement(ReactDom.findDOMNode(this));
  }

  componentWillUnmount() {
    mdl.componentHandler.downgradeElements(ReactDom.findDOMNode(this));
  }

  render() {
    return <Component {...this.props} />;
  }
};
