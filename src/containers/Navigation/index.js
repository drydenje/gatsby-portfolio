import React, { useRef } from 'react';
import Logo from '../../components/logo';
import { animated, useSpring } from 'react-spring';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GreenVivid } from '../../utilities';

import { NavStyles } from './index.styles';

import { useOnClickOutside } from '../../hooks';

const Navigation = ({ navToggle: isNavOpen, setNavOpen }) => {
  const ref = useRef();
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0, 0)`,
  });

  useOnClickOutside(ref, () => setNavOpen(false));

  return (
    <animated.div className="navWrapper" style={navAnimation}>
      <NavStyles ref={ref}>
        <Logo fontSize="1.5rem" />
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
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </NavStyles>
    </animated.div>
  );
};

export default Navigation;
