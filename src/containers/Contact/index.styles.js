import styled from 'styled-components';
import {
  GreenVivid,
  Grey,
  fontWeightLight,
  fontWeightBold,
} from '../../utilities';

export const ContactStyles = styled.article`
  /* grid-column: 1 / 3;
  grid-row: 2 / 3; */
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    display: inline-block;
    color: ${GreenVivid['900']};
    span {
      color: ${Grey['900']};
      font-weight: ${fontWeightBold};
    }
  }

  h2:first-child {
    /* margin-right: 0.5rem; */
    margin: 0;
  }

  p {
    color: ${Grey['600']};
    font-weight: ${fontWeightLight};
  }
`;
