import styled from 'styled-components';
import bgLeft from '../../images/backgroundLeft.png';
import bgRight from '../../images/backgroundRight.png';
import { above, white, swamp, fuelYellow, keppel } from '../../utilities/';

export const HeaderStyles = styled.header`
  width: 100%;

  div.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  div.panelLeft,
  div.panelRight {
    width: 50%;
    height: 100vh;
    position: relative;
  }

  div.panelLeft {
    display: none;
    color: ${white};
    background-color: ${fuelYellow};
    background-position-y: center;
    background-position-x: center;
    background-repeat: no-repeat;
  }

  div.panelLeft:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.071;
    background-image: url(${bgLeft});
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }

  div.panelRight {
    width: 100vw;
    color: ${white};
    background-color: ${swamp};
    background-position-y: center;
    background-position-x: center;
    background-blend-mode: overlay;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  div.panelRight:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.071;
    background-image: url(${bgRight});
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }

  h1 {
    span.its {
      color: ${fuelYellow};
    }

    span.me {
      color: ${keppel};
    }

    span.jeremyd {
      color: ${white};
    }
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked ~ nav {
    display: flex;
    transition: all 200ms ease-in-out;
    transform: translateX(100%);
  }

  nav i {
    color: black;
    margin: 3px;
    font-size: 3rem;
  }

  ${above.tabletPortrait`
    div.panelLeft {
      display: flex;
      width: 50%;
    }
    
    div.panelRight {
      display: flex;
      width: 50%;
    }
  `}
`;
