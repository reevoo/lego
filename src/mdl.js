import React from 'react';
import ReactDom from 'react-dom';

export default Component => class extends React.Component {
  componentDidMount() {
    componentHandler.upgradeElement(ReactDom.findDOMNode(this));
  }

  componentDidUpdate() {
    componentHandler.downgradeElements(ReactDom.findDOMNode(this));
    componentHandler.upgradeElement(ReactDom.findDOMNode(this));
  }

  componentWillUnmount() {
    componentHandler.downgradeElements(ReactDom.findDOMNode(this));
  }

  render() {
    return <Component {...this.props} />;
  }
};
