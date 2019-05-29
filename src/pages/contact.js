import React from 'react';
import styled from 'styled-components';
// import TransitionLink from 'gatsby-plugin-transition-link';
// import Link from 'gatsby-plugin-transition-link';
import { Helmet } from 'react-helmet';

import Panel from '../containers/Panel';
import Layout from '../components/layout';

// utilities
import {
  YellowVivid,
  GreenVivid,
  Grey,
  fontWeightLight,
  fontWeightBold,
  white,
  above,
} from '../utilities';

// images
import BackgroundLeft from '../images/backgroundLeft.png';
import BackgroundRight from '../images/backgroundRight.png';
import Envelope from '../images/noun_envelope_435258.svg';

// title: {
//   quote: 'A web developer',
//   headshot: 'headshotPicture',
// about: headshot: 'headshotPicture',
// callout: text: 'Portfolio', icon: 'icon',

const Content = ({ className }) => {
  return (
    <div className={className}>
      <h2>Want to talk?</h2>
      <p>I can be reached at hello[at]itsmejeremyd.com</p>
    </div>
  );
};

const StyledContent = styled(Content)`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    display: inline-block;
    color: ${GreenVivid['900']};
    span {
      color: ${Grey['900']};
      font-weight: ${fontWeightBold};
    }
  }

  h3:first-child {
    /* margin-right: 0.5rem; */
    margin: 0;
  }

  p {
    color: ${Grey['600']};
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
      color: ${Grey['900']};
      min-width: 40vw;
      ${above.tabletPortrait`
        min-width: auto;
      `}
    }

    li:before {
      content: '◆ ';
      color: ${YellowVivid['500']};
    }
  }
`;

const LEFT_CONTENT = {
  BackgroundImage: BackgroundLeft,
  Colour: YellowVivid['500'],
  CalloutText: 'Contact',
  IconSrc: Envelope,
};

const RIGHT_CONTENT = {
  // BackgroundImage: BackgroundRight,
  Colour: white,
  Content: StyledContent,
};

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>it's me, Jeremy D - Contact</title>
        <link rel="canonical" href="https://www.itsmejeremyd.com" />
      </Helmet>
      <Panel ComponentContent={LEFT_CONTENT} />
      <Panel ComponentContent={RIGHT_CONTENT} />
    </Layout>
  );
};

export default AboutPage;
