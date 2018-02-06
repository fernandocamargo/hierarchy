import React from 'react';
import classnames from 'classnames';

import Nodes from 'components/nodes';
import Actions from 'components/actions';

export default ({
  draggable,
  dragging,
  preview,
  name,
  position,
  expanded,
  actions,
  nodes,
}) =>
  draggable(
    <li className={classnames('node', { dragging, expanded })}>
      {preview(
        <dl className="profile">
          <dt className="info name">{name}</dt>
          <dd className="info position">{position}</dd>
          <Actions {...actions} />
        </dl>,
      )}
      <Nodes {...nodes} />
    </li>,
  );
