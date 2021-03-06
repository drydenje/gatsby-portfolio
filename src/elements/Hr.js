import styled from 'styled-components';

// horizontal line /w diamond
// https://css-tricks.com/examples/hrs/
export const Hr = styled.hr`
  overflow: visible; /* For ie */
  padding: 0;
  border: none;
  border-top: thin solid ${props => props.lineColour};
  text-align: center;
  width: ${props => props.lineWidth};
  margin: 4rem auto 2rem auto;

  :after {
    content: '◆';
    display: inline-block;
    position: relative;
    top: -0.59em;
    font-size: 1.5rem;
    padding: 0;
    background: transparent;
    color: ${props => props.diamondColour};
  }
`;
