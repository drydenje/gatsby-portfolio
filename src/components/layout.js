import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import Navigation from '../containers/Navigation';
import styled from 'styled-components';

// Setup and Base styling
import SetupStyles from './setup.styles';
import BaseStyles from './base.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GreenVivid, below } from '../utilities';
// import { transparentize } from 'polished';

const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0, 0)`,
  });

  return (
    <>
      <SetupStyles />
      <BaseStyles />

      <button
        aria-label="Navigation Menu"
        className="navButton"
        onClick={() => setNavOpen(!isNavOpen)}
        style={{
          color: `${GreenVivid['500']}`,
          // mixBlendMode: 'difference',
          border: '0',
          background: 'transparent',
          fontSize: '1.3rem',
          marginRight: '0.9rem',
        }}
      >
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </button>
      <Navigation style={navAnimation} />

      <Main id="maincontent">{children}</Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: row;

  ${below.tabletPortrait`
    flex-direction: column;
  `}
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
