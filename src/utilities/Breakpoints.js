// Mixins for media queries
import { css } from 'styled-components';

// /* Media query function usage */
// ${above.tabletPortrait`
//   color: blue
// `}

// Set media query sizes
const size = {
  phone: 600,
  tabletPortrait: 900,
  tabletLandscape: 1200,
  desktop: 1800,
  desktopLarge: 1800, // over this amount
};

// Used for mobile first
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Used for Desktop first
export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
