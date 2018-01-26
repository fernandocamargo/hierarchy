import React from 'react';
import { arrayOf, shape } from 'prop-types';

import forEach from 'utils/rendering/for-each';
import Node from 'components/node';
import { propTypes as nodePropTypes } from 'components/node/render';

export const propTypes = {
  nodes: arrayOf(shape(nodePropTypes)),
};

export const defaultProps = {
  nodes: [],
};

export default Object.assign(
  ({ nodes, actions }) => (
    <ul className="nodes">{forEach(nodes).render(Node, { actions })}</ul>
  ),
  {
    displayName: 'Nodes',
    propTypes,
    defaultProps,
  },
);
