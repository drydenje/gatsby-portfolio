import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

// Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fas, faBars } from '@fortawesome/free-solid-svg-icons';

// Website Containers
import Header from '../containers/Header';

// Add FontAwesome icons to the library, so they can be referenced throughout the app
library.add(fab, faTwitter, fas, faBars);

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>it's me, Jeremy D</title>
      <link rel="canonical" href="http://www.itsmejeremyd.com" />
      <meta name="description" content="The portfolio page of Jeremy Dryden" />
    </Helmet>
    <Header />
  </Layout>
);

export default IndexPage;
