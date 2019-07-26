import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { BackgroundImage } from 'gatsby-background-image';

import { PanelStyles } from './index.styles';

const Panel = ({ colour, content }) => (
  <PanelStyles colour={colour}>{content}</PanelStyles>
);

export default Panel;
