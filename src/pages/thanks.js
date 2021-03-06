import React from 'react';
import { Helmet } from 'react-helmet';

// Website Containers
import Layout from '../components/layout';
import Header from '../containers/Header';
import Panel from '../containers/Panel';
import Contact from '../containers/Contact';

// Components
import Callout from '../components/callout';

// utilities
import { Grey } from '../utilities';

// images
// import Envelope from '../images/noun_envelope_435258.svg';

const ThanksPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>it's me, Jeremy D - Contact</title>
        <link rel="canonical" href="https://www.itsmejeremyd.com" />
        <meta
          name="description"
          content="People and teams that I'm grateful for"
        />
      </Helmet>

      <Header content={<Callout headingText="Thanks" />} />
      <Panel colour={Grey['000']} content={<Contact />} />
    </Layout>
  );
};

export default ThanksPage;
