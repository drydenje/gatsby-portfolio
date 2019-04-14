import React from 'react';
import styled from 'styled-components';
import { white, fuelYellow, fontSerif, fontWeightRegular } from '../utilities';
const border = '18px';

const Callout = ({ className, text }) => {
  return <div className={className}>{text}</div>;
};

export default styled(Callout)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 1rem auto;

  max-width: 100%;

  position: relative;
  padding: 30% 0;
  box-sizing: border-box;

  color: ${white};
  font-family: ${fontSerif};
  font-weight: ${fontWeightRegular};
  font-size: 19vw;
  background: ${fuelYellow};
  background-clip: padding-box;
  border: solid ${border} transparent;
  border-radius: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -${border};
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
`;
