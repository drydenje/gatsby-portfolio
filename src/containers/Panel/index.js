// important imports
import React from 'react';
import styled from 'styled-components';
import Callout from '../../components/callout';

// utilities and colours
import { absolute, above, below } from '../../utilities';

const Panel = ({ ComponentContent }) => {
  const {
    BackgroundImage,
    CalloutText,
    Colour,
    Headshot,
    IconSrc,
    Content,
  } = ComponentContent;
  // Three possible payloads (so far)
  // - Title (quote, headshot diamond)
  // ✅ About (headshot square)
  // ✅ Callout (title, icon)

  return (
    <StyledPanel BackgroundImage={BackgroundImage} Colour={Colour}>
      {/* If text is passed, render the callout with the text as a heading */}
      {CalloutText && <Callout headingText={CalloutText} />}
      {/* If a headshot exists, render the callout with a headshot overlay */}
      {Headshot && <Callout headshot={Headshot} />}
      {/* Needs to be a dynamic icon, render if exists */}
      {IconSrc && <BottomRightIcon src={IconSrc} />}
      {Content && <Content />}
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
  min-height: 140px;
  ${above.tabletPortrait`
    height: 100vh;
  `}

  width: 100%;
  ${above.tabletPortrait`
    width: 50%;
  `}

  position: relative;
  z-index: 0;

  ${above.tabletPortrait`
    display: grid;
    grid-template-columns: 4fr 4fr 1fr;
    grid-template-rows: 0.5fr 3fr 0.5fr;
    grid-template-areas:
      '. . .'
      '. sectionTitle .'
      '. . .';
  `}

  background-color: ${props => props.Colour};
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  overflow-y: auto;
  overflow-x: hidden;

  :before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.071;
    background-image: url(${props => props.BackgroundImage});
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }
`;

const BottomRightIcon = styled.img`
  ${below.tabletPortrait`
    display: none;
  `}
  ${absolute({ xProp: 'right', yProp: 'bottom' })};
  min-width: 100px;
  width: 15%;
  opacity: 0.2;
`;

export default Panel;
