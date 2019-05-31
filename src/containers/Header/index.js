import React from 'react';
import { HeaderStyles } from './index.styles';
import Logo from '../../components/logo';

const Header = () => {
  return (
    <HeaderStyles id="home">
      <div className="container">
        <div className="panelLeft" />
        <div className="panelRight">
          <Logo fontSize="2.5rem" />
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
