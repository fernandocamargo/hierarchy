import React from 'react';

import Brand from 'components/brand';
import Nodes from 'components/nodes';

export default ({ nodes, actions }) => (
  <div className="component gui">
    <Brand name="Personio" url="https://www.personio.de/" />
    <Nodes nodes={nodes} actions={actions} />
  </div>
);
