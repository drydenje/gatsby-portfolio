import styled from 'styled-components';
import Background from '../../images/backgroundRight.png';
import { above } from '../../utilities/';

export const PanelStyles = styled.article`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;

  ${above.tabletPortrait`
    width: 50%;
  `}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.colour};
  background-position-y: center;
  background-position-x: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-attachment: fixed;

  overflow-y: scroll;

  :before {
    background-attachment: fixed;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.071;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }
`;
