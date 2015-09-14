import React from 'react';
import {Link} from 'react-router';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className='mdl-layout__drawer'>
        <nav className='mdl-navigation'>
          {this.props.routes.map(route =>
            <Link to={route.path} className='mdl-navigation__link'>
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
