import styled from 'styled-components';
import { above, white, swamp, fuelYellow, keppel } from '../../utilities/';
import bgLeft from '../../images/backgroundLeft.png';
import bgRight from '../../images/backgroundRight.png';

export const HeaderStyles = styled.header`
   max-height: 800px;

   label.menuBars {
      color: ${keppel};
      position: fixed;
      top: 1rem;
      right: 1rem;
      font-size: 1.5rem;
      z-index: 110;

      &:hover, &:focus {
         color: ${fuelYellow};
      }
   }

   div.container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-height: 800px;
   }
   
   div.panelLeft, div.panelRight {
      width: 50%;
      height: 100vh;
      max-height: 800px;
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
      ${
        {
          /* background-image: url('../assets/backgroundLeft.png'); */
        }
      }
      background-color: ${swamp};
      background-position-y: center;
      background-position-x: center;
      background-blend-mode: overlay; ${
        {
          /* multiply or overlay? */
        }
      }
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


  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ nav{
    display: flex;
    transition:all 200ms ease-in-out;
    transform:translateX(100%);
  }

  nav i {
    color: black;
      margin: 3px;
  }
    font-size: 3rem;


  ${above.medium`
    div.panelLeft, div.panelRight {
      display: flex;
      width: 50%;
    }
  `}
`;