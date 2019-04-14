import styled from 'styled-components';
import { black, keraGrey, keppel, fuelYellow } from '../../utilities';
const fontWeightLight = '300';
const fontWeightBold = '700';
const fontSerif = `'Merriweather', serif`;

export const ContactStyles = styled.section`
  form {
    max-width: 100%;
    padding: 0;

    input {
      width: 100%;
      font-family: ${fontSerif};
      font-size: 1rem;
      padding: 0.4rem 0 0.4rem 0;
      border: 1px solid transparent;
      border-bottom: 1px solid ${black};
      background: transparent;
      margin: 0.5rem 0;

      &::placeholder {
        color: $keppel;
        font-weight: ${fontWeightLight};
      }

      &:focus {
        background-color: ${keraGrey};
      }
    }

    textarea {
      width: 100%;
      font-family: ${fontSerif};
      font-size: 1rem;
      padding: 0.4rem 0 0.4rem 0;
      border: 1px solid transparent;
      border-bottom: 1px solid ${black};
      height: 30vh;
      resize: none;
      background: transparent;

      &::placeholder {
        color: ${keppel};
        font-weight: ${fontWeightLight};
      }

      &:focus {
        background-color: ${keraGrey};
      }
    }

    button {
      color: ${fuelYellow};
      background: ${black};
      border: 0.2rem solid transparent;
      margin: 1rem auto;
      display: block;
      width: 10rem;
      font-family: ${fontSerif};
      font-size: 1.5rem;
      padding: 0.2rem;
      text-transform: uppercase;

      &:hover,
      &:focus {
        color: ${fuelYellow};
        border-color: ${fuelYellow};
      }
    }
  }

  h2 {
    margin: 0.7rem 0;
    font-size: 1.3rem;
  }

  p {
    margin: 0 auto;
    font-size: 0.9rem;

    &.mail {
      font-weight: ${fontWeightBold};
    }
  }

  @media (min-width: 480px) {
    .calloutWrapper .callout {
      max-width: 400px;
      max-height: 400px;
      font-size: 4rem;
      padding: 7rem 0;
    }
  }

  /* Portrait tablet and small desktops */
  @media (min-width: 940px) {
    margin-bottom: 0;
    display: flex;
    flex-direction: row-reverse;

    .wrapper {
      max-width: 570px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .calloutWrapper,
    .wrapper {
      width: 50%;
      margin: 0;
    }

    .wrapper h2,
    .wrapper p,
    .wrapper form {
      margin: 1rem 2rem;
      text-align: right;
    }

    .wrapper h2 {
      font-size: 2rem;
    }

    .wrapper p {
      margin: 0 2rem;
    }

    .contactForm {
      margin: 1rem 0;
    }

    .wrapper form textarea {
      height: auto;
    }
  }
`;
