import React from 'react';
import mdl from '../mdl';

class Layout extends React.Component {
  render() {
    const topbar = this.props.topbar;
    const sidebar = this.props.sidebar;

    return <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
      <Topbar title={topbar.title} />
      <div className='mdl-layout mdl-js-layout mdl-layout--fixed-drawer'>
        <Sidebar routes={sidebar.routes} />
        <main className='mdl-layout__content mdl-color--grey-100'>
          <div className='mdl-grid'>
            <Card cols={12}>
              {this.props.children}
            </Card>
          </div>
        </main>
      </div>
    </div>;
  }
}

Layout.propTypes = {
  topbar: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
  }).isRequired,
  sidebar: React.PropTypes.shape({
    routes: React.PropTypes.arrayOf(React.PropTypes.shape({
      path: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default mdl(Layout);
