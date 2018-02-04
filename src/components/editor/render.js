import React from 'react';
import classnames from 'classnames';

import Instructions from 'components/instructions';
import Code from 'components/code';

export default ({ source, active }) => (
  <div className={classnames('component', 'editor', { active })}>
    <Instructions />
    <Code source={source} />
  </div>
);
