import styled from 'styled-components';
import Background from '../../images/backgroundLeft.png';
import { above, YellowVivid, Grey } from '../../utilities';

export const HeaderStyles = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  display: none;
  z-index: 0;

  ${above.tabletPortrait`
    width: 50%;

    display: grid;
    grid-template-columns: 4fr 4fr 1fr;
    grid-template-rows: 0.5fr 3fr 0.5fr;
    grid-template-areas:
      '. . .'
      '. sectionTitle .'
      '. . .';
  `}

  color: ${Grey['000']};
  background-color: ${YellowVivid['500']};
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;

  :before {
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
