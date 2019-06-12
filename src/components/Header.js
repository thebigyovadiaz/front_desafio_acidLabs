import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper cyan lighten-4">
          <a href="#!" className="brand-logo">{titulo}</a>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}
 
export default Header;
