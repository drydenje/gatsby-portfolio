import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Website Containers
import Layout from '../components/layout';
import Header from '../containers/Header';
import Panel from '../containers/Panel';
import About from '../containers/About';

// Components
import Portrait from '../components/portrait';

// Utilities
import { Grey } from '../utilities';

// Images
import Headshot from '../images/Square.jpg';

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const AboutPage = ({ data }) => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>it's me, Jeremy D - About</title>
      <link rel="canonical" href="https://www.itsmejeremyd.com" />
      <meta name="description" content="A little bit about Jeremy Dryden" />
    </Helmet>

    <Header content={<Portrait headshot={Headshot} />} />
    <Panel colour={Grey['000']} content={<About />} />
  </Layout>
);

export default AboutPage;
