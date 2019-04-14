import styled from 'styled-components';
import { white, swamp, fuelYellow } from '../../utilities';

export const FooterStyles = styled.footer`
  color: ${white};
  background: ${swamp};

  height: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* //align-items: center; */

  ul.navSocialLinks {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    li {
      display: inline-block;
      a {
        color: ${white};
        font-size: 1.5rem;
      }

      a:hover,
      a:focus {
        color: ${fuelYellow};
      }
    }
  }
`;
