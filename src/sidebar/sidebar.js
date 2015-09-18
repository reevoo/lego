import React from 'react';
import {Link} from 'react-router';

class Sidebar extends React.Component {

  render() {
    return (
      <div className='mdl-layout__drawer'>
        <nav className='mdl-navigation'>
          {this.props.routes.map(route =>
            <Link key={route.path}
              to={route.path}
              className='mdl-navigation__link'>
              {route.label}
            </Link>
          )}
        </nav>
      </div>
    );
  }
}

Sidebar.propTypes = {
  routes: React.PropTypes.arrayOf(React.PropTypes.shape({
    path: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Sidebar;
