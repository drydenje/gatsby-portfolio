import React from 'react';
import renderer from 'react-test-renderer';

import Callout from '../callout';
import Headshot from '../images/Square.jpg';

describe('Component - Callout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Callout />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a section title to the Callout component', () => {
    const tree = renderer.create(<Callout headingText="Portfolio" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a picture to the Callout component', () => {
    const tree = renderer.create(<Callout headshot={Headshot} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
