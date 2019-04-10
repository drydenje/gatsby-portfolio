import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Header = () => {
  return(
    <header id="home">
      {/* Navigation Menu */}
      <label htmlFor="navMenu" className="menuBars">
        <FontAwesomeIcon icon={["fas", "bars"]} size="lg"/>
      </label>
      <input type="checkbox" id="navMenu" />
      <nav>
        <h3 className="navLogo">
          itsMe<span>JeremyD</span>
        </h3>
        <ul className="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="panelLeft"></div>
        <div className="panelRight">
          <h1>
            <span className="its">it's</span><span className="me">me</span><span className="jeremyd">jeremyd</span>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header;