import React from 'react';
import { HeaderStyles } from './index.styles';

const Header = () => {
  return (
    <HeaderStyles id="home">
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
