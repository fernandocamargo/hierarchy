import React from 'react';
import { node, array } from 'prop-types';
import classnames from 'classnames';

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
  ({ name, position, employees, expanded, actions }) => (
    <li className={classnames('node', { expanded })}>
      <dl className="profile">
        <dt className="info name">{name}</dt>
        <dd className="info position">{position}</dd>
        <Actions actions={actions} />
      </dl>
      <Nodes nodes={employees} actions={actions} />
    </li>
  ),
  {
    displayName: 'Node',
    propTypes,
    defaultProps,
  },
);
