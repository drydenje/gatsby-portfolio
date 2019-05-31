import styled from 'styled-components';
import {
  fontWeightLight,
  fontWeightBold,
  Grey,
  GreenVivid,
} from '../../utilities';

export const AboutStyles = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* grid-template-rows: 1fr auto 1fr; */

  padding: 2rem;

  p {
    color: ${Grey['900']};
    font-weight: ${fontWeightLight};
  }
`;

export const Welcome = styled.h3`
  display: inline-block;
  color: ${GreenVivid['500']};
  font-size: 1.8rem;

  span {
    color: ${Grey['900']};
    font-weight: ${fontWeightBold};
  }

  :first-child {
    margin-right: 0.5rem;
  }
`;
