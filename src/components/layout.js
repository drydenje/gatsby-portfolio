import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';

import Navigation from '../containers/Navigation';

// Setup and Base styling
import SetupStyles from './setup.styles';
import BaseStyles from './base.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0, 0)`,
  });

  return (
    <>
      <SetupStyles />
      <BaseStyles />
      {/* Navigation Menu */}
      {/* <label htmlFor="navMenu" className="menuBars">
          <FontAwesomeIcon icon={['fas', 'bars']} />
        </label>
        <input type="checkbox" id="navMenu" /> */}
      <button
        className="navButton"
        onClick={() => setNavOpen(!isNavOpen)}
        style={{
          color: 'rgb(0, 0, 0)',
          mixBlendMode: 'difference',
          border: '0',
        }}
      >
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </button>
      <Navigation style={navAnimation} />

      <main id="maincontent">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
