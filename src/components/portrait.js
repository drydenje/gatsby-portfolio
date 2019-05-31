import React from 'react';
import styled from 'styled-components';
import { absolute, elevation, above, below } from '../utilities';
import CalloutSquare from '../images/CalloutSquare.svg';

const Portrait = ({ headshot }) => {
  return (
    <StyledSquare>
      <StyledHeadshot src={headshot} />
    </StyledSquare>
  );
};

// export default styled(Callout)``;
export default Portrait;

const StyledSquare = styled.div`
  grid-area: sectionTitle;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${above.tabletPortrait`
    // background-image: url(${CalloutSquare});
    background-position: center left;
    background-repeat: no-repeat;
    background-size: contain;
  `}
  min-width: 350px;
`;

const StyledHeadshot = styled.img`
  /* ${absolute({ xProp: 'right', yProp: '50%' })}; */
  ${below.tabletPortrait`
    display: none;
  `}

  /* Hide the callout text at higher screen sizes, hide the picture at lower? */

  /* position: absolute;
  right: 0; */
  margin-right: 0.8rem;
  ${elevation[2]};
  min-width: 350px;
  width: 40%;
`;
