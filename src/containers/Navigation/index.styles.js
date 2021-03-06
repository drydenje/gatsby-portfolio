import styled from 'styled-components';
import { white, swamp, fuelYellow } from '../../utilities';

export const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  position: fixed;
  top: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;

  /* width: 320px; */
  padding: 2rem;

  font-size: 1rem;
  background-color: ${swamp};

  h3 {
    margin: 0;
    align-self: center;
  }

  ul {
    padding: 0px;
    li {
      list-style: none;
      padding: 0.3rem;
    }

    li a {
      text-decoration: none;
    }
  }

  .navLinks {
    text-align: right;
    li {
    }

    li a {
      color: ${white};
      text-transform: capitalize;

      &:focus,
      &:hover {
        color: ${fuelYellow};
      }
    }
  }
`;
