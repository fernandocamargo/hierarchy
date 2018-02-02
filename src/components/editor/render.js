import React from 'react';
import classnames from 'classnames';

import Code from 'components/code';

export default ({ source, active }) => (
  <div className={classnames('component', 'editor', { active })}>
    <Code source={source} />
  </div>
);
