import React from 'react';
import Navigation from '../Navigation/';
import { HeaderStyles } from './index.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <HeaderStyles id="home">
      {/* Navigation Menu */}
      <label htmlFor="navMenu" className="menuBars">
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </label>
      <input type="checkbox" id="navMenu" />
      <Navigation />
      <div className="container">
        <div className="panelLeft" />
        <div className="panelRight">
          <h1>
            <span className="its">it's</span>
            <span className="me">me</span>
            <span className="jeremyd">jeremyd</span>
          </h1>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
