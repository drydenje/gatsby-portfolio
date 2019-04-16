import styled from 'styled-components';
import { GreenVivid, RedVivid, elevation } from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,

  cancel: () => `
    background: ${RedVivid[600]};
  `,
};

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  transition: 0.3s ease box-shadow;
  background: ${GreenVivid[700]};
  margin: 5px;
  ${elevation[1]};
  &:hover {
    ${elevation[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

// Extending 'Button' (using it's styles and modifying them slightly)
export const CancelButton = styled(Button)`
  background: ${RedVivid[600]};
`;
