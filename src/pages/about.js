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
import Briefcase from '../images/noun_portfolio_bag_2393950.svg';
import Headshot from '../images/Square.jpg';

// title: {
//   quote: 'A web developer',
//   headshot: 'headshotPicture',
// about: headshot: 'headshotPicture',
// callout: text: 'Portfolio', icon: 'icon',

const Content = ({ className }) => {
  return (
    <div className={className}>
      <h3>
        Hello, I'm <span>Jeremy Dryden</span>
      </h3>
      <p>
        I'm a Toronto, Ontario based front-end web developer looking for a good
        fit with a great company. Feel free to reach out using the contact page,
        I'd love to talk!
      </p>

      <h4>Technical Skills</h4>
      <ul className="aboutSkills">
        <li>Html5</li>
        <li>Css3</li>
        <li>Sass/Scss</li>
        <li>Javascript/ES6</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Firebase</li>
        <li>Gatsby</li>
        <li>Styled Components</li>
      </ul>
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
  Headshot: Headshot,
  CalloutText: '',
};

const RIGHT_CONTENT = {
  BackgroundImage: BackgroundRight,
  Colour: white,
  Content: StyledContent,
};

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>it's me, Jeremy D - About</title>
        <link rel="canonical" href="https://www.itsmejeremyd.com" />
      </Helmet>
      <Panel ComponentContent={LEFT_CONTENT} />
      <Panel ComponentContent={RIGHT_CONTENT} />
    </Layout>
  );
};

export default AboutPage;
