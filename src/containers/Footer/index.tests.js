import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '.';

describe('Footer', () => {
  it('Renders the footer correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
