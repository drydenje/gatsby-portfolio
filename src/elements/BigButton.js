import styled from 'styled-components';
import { Grey, YellowVivid } from '../utilities';
import { OutboundLink } from 'gatsby-plugin-gtag';

export const BigButton = styled(OutboundLink)`
  display: inline-block;
  color: ${Grey[900]};
  width: 40%;
  text-decoration: none;
  background: transparent;
  border: 0.1rem solid ${Grey[900]};
  padding: 0.3rem;
  text-align: center;

  &:hover,
  &:focus {
    background-color: ${YellowVivid[500]};
  }
`;
