import React from 'react';
import { AboutStyles } from './index.styles.js';
import ProfileImage from '../../images/Square.jpg';

const About = () => {
  return (
    <AboutStyles className="about" id="about">
      <figure>
        <img src={ProfileImage} alt="Jeremy Dryden" />
      </figure>

      {/* Start of .wrapper */}
      <div className="wrapper">
        <h3>
          Hello, I'm <span>Jeremy Dryden</span>
        </h3>
        <p>
          I'm a Toronto, Ontario based front-end web developer looking for a
          good fit with a great company. Feel free to reach out using the form
          below, I'd love to talk!
        </p>

        <h4>Technical Skills</h4>
        <ul className="aboutSkills">
          <li>Html5</li>
          <li>Css3</li>
          <li>Sass/Scss</li>
          <li>Javascript/ES6</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Firebase</li>
        </ul>
      </div>
      {/* End of .wrapper */}
    </AboutStyles>
  );
};

export default About;
