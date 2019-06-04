import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

// Website Containers
import Layout from '../components/layout';
import Header from '../containers/Header';
import Panel from '../containers/Panel';
import About from '../containers/About';

// Components
import Portrait from '../components/portrait';

// Utilities
import { Grey } from '../utilities';

const AboutPage = ({ data }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        headshot: file(relativePath: { eq: "Square.jpg" }) {
          childImageSharp {
            fixed(width: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title} - About</title>
          <link rel="canonical" href="https://www.itsmejeremyd.com" />
          <meta name="description" content="A little bit about Jeremy Dryden" />
        </Helmet>

        <Header content={<Portrait headshot={data.headshot} />} />

        <Panel colour={Grey['000']} content={<About />} />
      </Layout>
    )}
  />
);

export default AboutPage;
