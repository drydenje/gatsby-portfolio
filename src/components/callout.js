import React from 'react';
import styled from 'styled-components';
import { Grey } from '../utilities';
import CalloutSquare from '../images/CalloutSquare.svg';

// const border = '18px';

const Callout = ({ headingText }) => {
  return (
    <StyledSquare>
      <StyledHeading>{headingText}</StyledHeading>
    </StyledSquare>
  );
};

export default styled(Callout)``;

const StyledSquare = styled.div`
  grid-area: sectionTitle;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-image: url(${CalloutSquare});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledHeading = styled.h1`
  color: ${Grey['000']};
  font-size: 11.5vw;
  margin-left: 5.5vw;
  font-family: 'Merriweather', serif;
  font-weight: normal;
`;
