import { createGlobalStyle } from 'styled-components';
import { Grey } from '../utilities/';
import {
  fontSerif,
  fontSansSerif,
  fontWeightLight,
  fontWeightRegular,
  fontWeightBold,
} from '../utilities';

const BaseStyles = createGlobalStyle`
/* @import url(''); */
html {
  font-size: 125%;
}

body {
  font-family: ${fontSansSerif};
  font-weight: ${fontWeightLight};
  font-size: 1rem;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  color: ${Grey['900']};
  background: $white;
  scroll-behavior: smooth;
}

h1 {
  font-family: ${fontSerif};
  font-weight: ${fontWeightBold};
  font-size: 1.8rem;
}

h2 {
  font-family: ${fontSerif};
  font-weight: ${fontWeightBold};
}

h3 {
  font-family: ${fontSerif};
  font-weight: ${fontWeightLight};
  /* margin: 0.2rem auto; */
}

h4 {
  font-family: ${fontSerif};
  font-weight: ${fontWeightRegular};
  margin: 0;
}

img {
  max-width: 100%;
}

section {
  margin: 2rem 0;
  min-height: 600px;
}

/* // Wrapper */
.wrapper {
  max-width: 1000px;
  margin: 1rem 1.5rem 0;
}

/* // Skip links */
.skip-link {
  position: absolute;
  left: -1000px;
  top: 5px;
  z-index: 999;
  background: white;
  color: black;
}

.skip-link:focus {
  left: 0;
}

/* // Hide the form labels */
label.visuallyHidden:not(:focus):not(:active) {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.navButton { 
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  margin: 10px;
}

.navWrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
}

@media (min-width: 480px) {
  section {
    margin: 0 auto;
    min-height: 80vh;
  }

  .calloutWrapper .callout {
    max-width: 400px;
    max-height: 400px;
    font-size: 4rem;
    padding: 7rem 0;
  }
}

`;

export default BaseStyles;
