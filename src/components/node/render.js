import React from 'react';
import classnames from 'classnames';

import Nodes from 'components/nodes';
import Actions from 'components/actions';

export default ({ name, position, expanded, actions, nodes }) => (
  <li className={classnames('node', { expanded })}>
    <dl className="profile">
      <dt className="info name">{name}</dt>
      <dd className="info position">{position}</dd>
      <Actions {...actions} />
    </dl>
    <Nodes {...nodes} />
  </li>
);
