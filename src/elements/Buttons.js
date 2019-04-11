import styled from 'styled-components';
import { fixedTop } from '../utilities';

const color = 'white';

export const Button = styled.button`
  padding: 20px;
  border-radius: 7px;
  color: ${color};
  font-size: 2rem;
  border: none;
  background: indigo;
  margin: 5px;
`;

// Extending 'Button' (using it's styles and modifying them slightly)
export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;
