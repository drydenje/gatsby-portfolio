import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { above, YellowVivid, Grey } from '../../utilities';

// import { HeaderStyles } from './index.styles';

const Header = ({ className, content }) => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "backgroundLeft.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.background.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="header"
          className={className}
          fluid={imageData}
          backgroundColor={YellowVivid['500']}
        >
          {content}
        </BackgroundImage>
      );
    }}
    // <HeaderStyles id="home">{content}</HeaderStyles>
  />
);

// export default Header;

export const HeaderStyles = styled(Header)`
  width: 100%;
  height: 100vh;
  position: relative;
  display: none;
  z-index: 0;

  ${above.tabletPortrait`
    width: 50%;

    display: grid;
    grid-template-columns: 4fr 4fr 1fr;
    grid-template-rows: 0.5fr 3fr 0.5fr;
    grid-template-areas:
      '. . .'
      '. sectionTitle .'
      '. . .';
  `}

  color: ${Grey['000']};
  background-color: ${YellowVivid['500']};
  /* background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat; */

  ::before, ::after {
    content: '';
    /* display: block; */
    /* position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; */
    /* z-index: -1; */
    opacity: 0.071 !important;
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }

`;

export default HeaderStyles;
