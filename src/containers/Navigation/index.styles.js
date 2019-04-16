import styled from 'styled-components';
import { white, swamp, fuelYellow, keppel } from '../../utilities';

export const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  left: -320px;
  transition: all 200ms ease-in-out;
  position: fixed;
  top: 0;
  z-index: 100;

  height: 100vh;
  width: 320px;
  max-width: 400px;
  padding: 1rem;

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

  .navLogo {
    // text-transform: uppercase;
    color: ${keppel};

    span:nth-child(1) {
      color: ${fuelYellow};
    }
    span:nth-child(2) {
      color: ${white};
    }
  }

  .navLinks {
    text-align: right;
    li {
      ${{
        /* display: inline-block; */
      }}
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

  .navSocialLinks {
    // text-align: center;

    li {
      display: inline-block;
    }
  }
`;
