import React from 'react';
import { MySpring, SpringLink } from '../components/springTitle';
import Callout from '../components/callout';

const B = () => (
  <>
    <h1>React spring</h1>
    <MySpring text="hello from page B" />
    <SpringLink to="/one">to page a!</SpringLink>
    <Callout headingText="Portfolio" />
  </>
);

export default B;
