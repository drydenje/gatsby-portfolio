import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
//Website Containers
import Header from '../containers/Header';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>it's me, Jeremy D</title>
      <link rel="canonical" href="https://www.itsmejeremyd.com" />
      <meta name="description" content="The portfolio page of Jeremy Dryden" />
    </Helmet>

    <Header />
  </Layout>
);

export default IndexPage;
