import React from 'react';
import { Helmet } from 'react-helmet';

// Website Containers
import Layout from '../components/layout';
import Header from '../containers/Header';
import Panel from '../containers/Panel';
import Splash from '../containers/Splash';

// Components
// import Logo from '../components/logo';

// Utilities
import { Grey } from '../utilities/';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>it's me, Jeremy D</title>
      <link rel="canonical" href="https://www.itsmejeremyd.com" />
      <meta name="description" content="The portfolio page of Jeremy Dryden, a web developer from Toronto, Ontario, Canada" />
    </Helmet>

    <Header />
    <Panel colour={Grey['900']} content={<Splash fontSize="2rem" />} />
  </Layout>
);

export default IndexPage;
