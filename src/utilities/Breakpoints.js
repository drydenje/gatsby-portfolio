// Mixins for media queries
import { css } from 'styled-components';

// /* Media query function usage */
// ${above.medium`
//   color: blue
// `}

// Set media query sizes
const size = {
  small: 400,
  medium: 960,
  large: 1140,
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
