import React from 'react';
import { NavStyles } from './index.styles';

const Navigation = () => {
  return (
    <>
      <NavStyles>
        <h3 className="navLogo">
          itsMe<span>JeremyD</span>
        </h3>
        <ul className="navLinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </NavStyles>
    </>
  );
};

export default Navigation;
