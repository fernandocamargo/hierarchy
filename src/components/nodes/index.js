import React from 'react';
import { arrayOf, shape } from 'prop-types';

import forEach from 'utils/rendering/for-each';
import Node, { propTypes as nodePropTypes } from 'components/node/render';

export const propTypes = {
  nodes: arrayOf(shape(nodePropTypes)),
};

export const defaultProps = {
  nodes: [],
};

export default Object.assign(
  ({ nodes }) =>
    !!nodes.length && <ul className="nodes">{forEach(nodes).render(Node)}</ul>,
  {
    displayName: 'Nodes',
    propTypes,
    defaultProps,
  },
);
