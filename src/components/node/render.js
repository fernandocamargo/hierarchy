import React from 'react';
import { node, array } from 'prop-types';

import Nodes from 'components/nodes';
import Actions from 'components/actions';

export const propTypes = {
  name: node.isRequired,
  position: node.isRequired,
  employees: array,
};

export const defaultProps = {
  employees: [],
};

export default Object.assign(
  ({ name, position, employees }) => (
    <li className="node">
      <dl className="profile">
        <dt className="info name">{name}</dt>
        <dd className="info position">{position}</dd>
        <Actions log={() => console.log('log();')} />
      </dl>
      <Nodes nodes={employees} />
    </li>
  ),
  {
    displayName: 'Node',
    propTypes,
    defaultProps,
  },
);
