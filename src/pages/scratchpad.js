import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';
import SetupStyles from '../components/setup.styles';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Heading, Button, CancelButton, Card } from '../elements';
import { elevation } from '../utilities';

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
);

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
    background: rebeccapurple;
    ${elevation[2]}
  }
`;

/* style Buttons within MyHeading */
/* 
  ${Button} {
    margin-bottom: 2rem;
  } 
  */

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SetupStyles />
    <Heading>Hi people</Heading>

    <>
      <p
        css={`
          background: yellow;
        `}
      >
        Welcome to your new Gatsby site.
      </p>
      <p>Now go build something great.</p>
      {/* <Button>Inner Button</Button> */}
    </>

    <DoubleFake />

    <Card>
      <h2>Card Heading</h2>
      <Card.Button>Say Hello</Card.Button>
      <Card.Button modifiers={['cancel']}>Don't Say Hello</Card.Button>
    </Card>

    <Button>Submit</Button>
    <Button modifiers="cancel">Modifier Cancel</Button>
    <CancelButton>Cancel</CancelButton>
    <Button modifiers="small">Submit</Button>
    <Button modifiers={['small', 'cancel']} as="a">
      Cancel
    </Button>
    <Link to="/">Run home, Jack</Link>
  </Layout>
);

export default IndexPage;
