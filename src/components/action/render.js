import React from 'react';
import classnames from 'classnames';

export default ({ title, className, action }) => (
  <li className={classnames('action', className)}>
    <a href="" title={title} onClick={action}>
      {title}
    </a>
  </li>
);
