import React from 'react';
import styled from 'styled-components';
import { Grey, absolute, elevation } from '../utilities';
import CalloutSquare from '../images/CalloutSquare.svg';
// import { Spring } from 'react-spring/renderprops';

const Callout = ({ headingText, headshot }) => {
  return (
    <StyledSquare>
      {/* <Spring from={{ opactiy: 0 }} to={{ opacity: 1 }}> */}
      {/* {styles => ( */}
      {/* <> */}
      {/* {console.log(styles)} */}
      {/* <div style={{ overflow: 'hidden' }}> */}
      {/* <div style={{ overflow: 'hidden', ...styles }}> */}
      {headingText && <StyledHeading>{headingText}</StyledHeading>}
      {headshot && <StyledHeadshot src={headshot} />}
      {/* </div> */}
      {/* </> */}
      {/* )} */}
      {/* </Spring> */}
    </StyledSquare>
  );
};

// export default styled(Callout)``;
export default Callout;

const StyledSquare = styled.div`
  grid-area: sectionTitle;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-image: url(${CalloutSquare});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 350px;
`;

const StyledHeading = styled.h1`
  color: ${Grey['000']};
  font-size: calc(11.5vw / 2);
  /* margin-left: calc(5.5vw / 2 + 2); */
  margin-left: 50px;
  font-family: 'Merriweather', serif;
  font-weight: normal;
`;

const StyledHeadshot = styled.img`
  ${absolute({ xProp: 'right', yProp: '' })};
  margin: 20px;
  ${elevation[2]};
  min-width: 350px;
  width: 40%;
`;
