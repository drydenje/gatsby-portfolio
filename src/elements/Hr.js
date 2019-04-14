import styled from 'styled-components';
import { black, keppel, fuelYellow, white } from '../utilities';

// horizontal line /w diamond
// https://css-tricks.com/examples/hrs/
export const Hr = styled.hr`
  overflow: visible; /* For ie */
  padding: 0;
  border: none;
  border-top: thin solid ${keppel};
  color: ${black};
  text-align: center;
  width: 75%;
  margin: 2rem auto 0rem auto;

  :after {
    content: '◆';
    display: inline-block;
    position: relative;
    top: -0.66em;
    font-size: 1.5rem;
    padding: 0;
    background: ${white};
    color: ${fuelYellow};
  }
`;
