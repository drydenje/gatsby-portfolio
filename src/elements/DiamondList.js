import styled from 'styled-components';
import { above, Grey, YellowVivid } from '../utilities';

export const DiamondList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0.5rem 0 1.2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-transform: lowercase;

  li {
    padding-left: 0.5rem;
    color: ${Grey['900']};
    min-width: 40vw;
    ${above.tabletPortrait`
      min-width: auto;
    `}
  }

  li:before {
    content: '◆';
    color: ${YellowVivid[500]};
  }
`;
