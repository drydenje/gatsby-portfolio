import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Callout from '../callout';
import Headshot from '../images/Square.jpg';

describe('Component - Callout', () => {
  afterEach(cleanup);
  it('renders correctly with no props passed', () => {
    const { container, debug } = render(<Callout />);
    expect(container).toMatchSnapshot();
    // expect it to have no text
    expect(container).toBeVisible();
  });

  it('renders a section title to the Callout component', () => {
    const { container, debug } = render(<Callout headingText="Portfolio" />);
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('Portfolio');
    console.log(debug);
  });

  it('renders a picture to the Callout component', () => {
    const { container, debug } = render(<Callout headshot={Headshot} />);
    expect(container).toMatchSnapshot();
    // expect it to have the headshot image
  });
});
