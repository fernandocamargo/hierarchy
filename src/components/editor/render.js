import React from 'react';
import classnames from 'classnames';

export default ({ source, active }) => (
  <div className={classnames('component', 'editor', { active })}>
    <pre className="source">{JSON.stringify(source, null, 2)}</pre>
  </div>
);
