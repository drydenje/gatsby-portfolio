import React from 'react';
import { MySpring, SpringLink } from '../components/springTitle';
import Callout from '../components/callout';

const A = () => (
  <>
    <h1>React spring</h1>
    <MySpring text="hello from page A" />
    <SpringLink to="/two">to page b!</SpringLink>
    <Callout headingText="Portfolio" />
  </>
);

export default A;
