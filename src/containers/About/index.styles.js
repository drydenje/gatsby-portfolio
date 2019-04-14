import styled from 'styled-components';
import { keppel, black, fuelYellow } from '../../utilities';
const fontWeightLight = '300';
const fontWeightBold = '700';

export const AboutStyles = styled.section`
    margin-top: 0;

    figure {
      background: ${fuelYellow};
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
        max-width: 400px;
        margin: 5%;
        box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
      }
    }

    h3 {
      display: inline-block;
      color: ${keppel};
      span {
        color: ${black};
        font-weight: ${fontWeightBold};
      }
    }

    h3:first-child {
      margin-right: 0.5rem;
    }

    p {
      color: $black;
      font-weight: ${fontWeightLight};
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0.5rem 0 1.2rem 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      text-transform: lowercase;

      li {
        padding-left: 0.5rem;
        color: $black;
        min-width: 40vw;
      }

      li:before {
        content: '◆';
        color: ${fuelYellow};
      }
    }
  }

  @media (min-width: 940px) {
      margin-bottom: 0;
      display: flex;
      flex-direction: row-reverse;
      ${
        {
          /*max-height: 428px;*/
        }
      }

      img {
        width: 50%;
      }

      figure,
      .wrapper {
        width: 50%;
        margin: 0;
      }

      ul li {
        min-width: auto;
      }

      .wrapper {
        max-width: 570px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem;
      }
`;
