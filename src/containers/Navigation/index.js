import React from 'react';
import Logo from '../../components/logo';
import { animated } from 'react-spring';

import { Link } from 'gatsby';

import { NavStyles } from './index.styles';

const Navigation = ({ style }) => {
  return (
    <animated.div className="navWrapper" style={style}>
      <NavStyles>
        <Logo fontSize="1.5rem" />
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
