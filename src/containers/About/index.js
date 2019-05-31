import React from 'react';
import { AboutStyles, Welcome } from './index.styles.js';
import { DiamondList } from '../../elements';

const About = () => {
  return (
    <AboutStyles className="about" id="about">
      <Welcome>
        Hello, I'm <span>Jeremy Dryden</span>
      </Welcome>
      <p>
        I'm a Toronto, Ontario based front-end web developer looking for a good
        fit with a great company. Feel free to reach out using the form below,
        I'd love to talk!
      </p>

      <h4>Technical Skills</h4>
      <DiamondList>
        <li>Html5</li>
        <li>Css3</li>
        <li>Sass/Scss</li>
        <li>Javascript/ES6</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Firebase</li>
        <li>Gatsby</li>
        <li>Styled Components</li>
      </DiamondList>
    </AboutStyles>
  );
};

export default About;
