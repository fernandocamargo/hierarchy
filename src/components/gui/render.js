import React from 'react';
import classnames from 'classnames';

import Brand from 'components/brand';
import Intro from 'components/intro';
import Nodes from 'components/nodes';

export default ({ nodes, actions, fullscreen, empty }) => (
  <div
    className={classnames('component', 'gui', {
      fullscreen,
      empty,
    })}
  >
    <Brand name="Personio" url="https://www.personio.de/" />
    <Intro />
    <Nodes nodes={nodes} actions={actions} />
  </div>
);
