import { createGlobalStyle } from 'styled-components';
import { Grey } from '../utilities/';

const BaseStyles = createGlobalStyle`
/* @import url(''); */
html {
  font-size: 125%;
}

body {
  font-family: $fontSansSerif;
  font-weight: $fontWeightLight;
  font-size: 1rem;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  color: ${Grey['900']};
  background: $white;
  scroll-behavior: smooth;
}

h1 {
  font-family: $fontSerif;
  font-weight: $fontWeightBold;
  font-size: 1.8rem;
}

h2 {
  font-family: $fontSerif;
  font-weight: $fontWeightBold;
}

h3 {
  font-family: $fontSerif;
  font-weight: $fontWeightLight;
  margin: 0.2rem auto;
}

h4 {
  font-family: $fontSerif;
  font-weight: $fontWeightRegular;
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



/* // This technique was use from: https://codepen.io/shshaw/pen/MqMZGR?editors=0100#0
// The idea is that you create a :before element with a bordera bright colour, and z-position it behind the main element
// The main element then has a transparent border, allowing the gradient to show through */
.callout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //width: 50vw;
  width: 95%;
  margin: 1rem auto;

  max-width: 100%;

  position: relative;
  padding: 30% 0;
  // padding: 10% 2em;
  box-sizing: border-box;
  // opacity: 0.8;

  $border: 18px;
  color: $white;
  font-family: $fontSerif;
  font-weight: $fontWeightRegular;
  font-size: 19vw;
  background: $fuelYellow;
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    // opacity: 0.8;
    margin: -$border;
    border-radius: inherit;
    background: -moz-linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 63%,
      rgba(255, 255, 255, 0) 63%,
      rgba(255, 255, 255, 0) 100%
    ); /* FF3.6-15 */

    background: -webkit-linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 63%,
      rgba(255, 255, 255, 0) 63%,
      rgba(255, 255, 255, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */

    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 63%,
      rgba(255, 255, 255, 0) 63%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}

.calloutWrapper {
  width: 100%;
  background-color: $fuelYellow;
  // background-image: url('../assets/backgroundLeft.png');
  padding: 1rem;
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
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
