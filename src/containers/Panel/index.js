// important imports
import React from 'react';
import { PanelStyles } from './index.styles';

const Panel = ({ colour, content }) => (
  <PanelStyles colour={colour}>{content}</PanelStyles>
);

export default Panel;
