import React from 'react';
import { SplashStyles } from './index.styles.js';
import Logo from '../../components/logo';

const Splash = ({ fontSize }) => (
  <SplashStyles>
    <Logo fontSize="2rem" />
  </SplashStyles>
);

export default Splash;
