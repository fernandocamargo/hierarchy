import React from 'react';

import forEach from 'utils/rendering/for-each';
import Node from 'components/node';

export default ({ nodes, actions }) =>
  !!nodes.length && (
    <ul className="nodes">{forEach(nodes).render(Node, { actions })}</ul>
  );
