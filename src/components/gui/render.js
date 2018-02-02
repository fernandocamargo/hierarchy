import React from 'react';
import classnames from 'classnames';

import Brand from 'components/brand';
import Nodes from 'components/nodes';

export default ({ nodes, actions, fullscreen }) => (
  <div className={classnames('component', 'gui', { fullscreen })}>
    <Brand name="Personio" url="https://www.personio.de/" />
    <Nodes nodes={nodes} actions={actions} />
  </div>
);
