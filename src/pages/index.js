import React from 'react';

// Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fas, faBars } from '@fortawesome/free-solid-svg-icons';
import SetupStyles from '../components/setup.styles';
import BaseStyles from '../components/base.styles';

// Website Containers
import Header from '../containers/Header';
import About from '../containers/About';
import Portfolio from '../containers/Portfolio';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer/';

// Add FontAwesome icons to the library, so they can be referenced throughout the app
library.add(fab, faTwitter, fas, faBars);

const IndexPage = () => (
  <>
    <SetupStyles />
    <BaseStyles />
    <Header />
    <main id="maincontent">
      <About />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </>
);

export default IndexPage;
