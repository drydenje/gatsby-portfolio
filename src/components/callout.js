import React, { useState } from 'react';
import styled from 'styled-components';
import { Grey, absolute, elevation, above, below } from '../utilities';
import CalloutSquare from '../images/CalloutSquare.svg';

import { useSpring, animated } from 'react-spring';

const Callout = ({ headingText, headshot }) => {
  const [isToggled, setToggle] = useState(true);
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    // color: isToggled ? 'tomato' : 'green',
    y: isToggled ? 0 : -50,
  });
  return (
    <StyledSquare
      onLoad={() => {
        setToggle(!isToggled);
        // console.log('loaded');
      }}
    >
      {headingText && (
        <SlideUp
          style={{
            transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
            color,
          }}
        >
          {headingText}
        </SlideUp>
      )}
      {headshot && <StyledHeadshot src={headshot} />}
      {/* <button onClick={() => setToggle(!isToggled)}>Toggle</button> */}
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

  ${above.tabletPortrait`
    background-image: url(${CalloutSquare});
    background-position: center left;
    background-repeat: no-repeat;
    background-size: contain;
  `}
  min-width: 350px;
`;

const StyledHeading = styled.h1`
  /* ${above.tabletPortrait`
    display: none;
  `} */

  color: ${Grey['000']};
  font-size: 4rem;
  /* font-size: calc(11.5vw / 2); */
  /* margin-left: calc(5.5vw / 2 + 2); */
  margin-left: 50px;
  font-family: 'Merriweather', serif;
  font-weight: normal;
`;

const SlideUp = animated(StyledHeading);

const StyledHeadshot = styled.img`
  /* ${absolute({ xProp: 'right', yProp: '50%' })}; */
  ${below.tabletPortrait`
    display: none;
  `}
  position: absolute;
  right: 0;
  margin-right: 0.8rem;
  ${elevation[2]};
  min-width: 350px;
  width: 40%;
`;
