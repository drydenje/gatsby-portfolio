import React from 'react';
import { Helmet } from 'react-helmet';

// Website Containers
import Layout from '../components/layout';
import Header from '../containers/Header';
import Panel from '../containers/Panel';
import Portfolio from '../containers/Portfolio';

// Components
import Callout from '../components/callout';

// Utilities
import { Grey } from '../utilities';

// Images
// import Briefcase from '../images/noun_portfolio_bag_2393950.svg';

const PortfolioPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>it's me, Jeremy D - Portfolio</title>
        <link rel="canonical" href="https://www.itsmejeremyd.com" />
        <meta name="description" content="The portfolio of Jeremy Dryden" />
      </Helmet>

      <Header content={<Callout headingText="Portfolio" />} />
      <Panel colour={Grey['000']} content={<Portfolio />} />
    </Layout>
  );
};

export default PortfolioPage;
