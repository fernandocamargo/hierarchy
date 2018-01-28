import React from 'react';
import classnames from 'classnames';

import Nodes from 'components/nodes';
import Actions from 'components/actions';

export default ({ name, position, employees, expanded, path, actions }) => (
  <li className={classnames('node', { expanded })}>
    <dl className="profile">
      <dt className="info name">{name}</dt>
      <dd className="info position">{position}</dd>
      <Actions
        actions={{
          toggle: () => actions.toggle(path),
          add: () => actions.add(path),
          remove: () => actions.remove(path),
        }}
      />
    </dl>
    <Nodes nodes={employees} actions={actions} />
  </li>
);
