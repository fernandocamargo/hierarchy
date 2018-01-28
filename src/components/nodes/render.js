import React from 'react';

import forEach from 'utils/rendering/for-each';
import Node from 'components/node';

export default ({ nodes, actions }) => (
  <ul className="nodes">{forEach(nodes).render(Node, { actions })}</ul>
);
