import React from 'react';
import styled from 'styled-components';
import { YellowVivid, GreenVivid, Grey } from '../utilities/';

const Logo = ({ fontSize }) => {
  return (
    <Title size={fontSize}>
      <Text colour={YellowVivid['500']}>it's</Text>
      <Text colour={GreenVivid['700']}>Me</Text>
      <Text colour={Grey['000']}>Jeremyd</Text>
    </Title>
  );
};

export default Logo;

const Text = styled.span`
  color: ${props => props.colour};
`;

const Title = styled.h1`
  font-size: ${props => props.size};
`;
