// important imports
import React from 'react';
import styled from 'styled-components';
import Callout from '../components/callout';

// images
import Briefcase from '../images/noun_portfolio_bag_2393950.svg';
import BackgroundLeft from '../images/backgroundLeft.png';

// utilities and colours
import { YellowVivid, absolute } from '../utilities/';

// Three possible payloads (so far)
// - Title (quote, headshot diamond)
// - About (headshot square)
// - Callout (title, icon)

const Panel = ({ Children }) => {
  const children = {
    title: {
      quote: 'A web developer',
      headshot: 'headshotPicture',
    },
    about: {
      headshot: 'headshotPicture',
    },
    callout: {
      text: 'Portfolio',
      icon: 'icon',
    },
  };
  return (
    <StyledPanel>
      <Callout headingText={children.callout.text} />
      <StyledIcon src={Briefcase} />
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 4fr 50vw 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    '. . .'
    '. sectionTitle .'
    '. . .';

  background-color: ${YellowVivid['500']};
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;

  :before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.071;
    background-image: url(${BackgroundLeft});
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }
`;

const StyledIcon = styled.img`
  ${absolute({ xProp: 'right', yProp: 'bottom' })};
  width: 15vw;
  opacity: 0.2;
`;

export default Panel;
