import React from 'react';

import Brand from 'components/brand';
import Nodes, { propTypes, defaultProps } from 'components/nodes';

export default Object.assign(
  ({ nodes }) => (
    <div className="component gui">
      <Brand name="Personio" url="https://www.personio.de/" />
      <Nodes nodes={nodes} />
    </div>
  ),
  {
    displayName: 'GUI',
    propTypes,
    defaultProps,
  },
);
