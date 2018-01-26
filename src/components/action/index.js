import React from 'react';
import classnames from 'classnames';

export default ({ title, className }) => (
  <li className={classnames('action', className)}>
    <a href="" title={title}>
      {title}
    </a>
  </li>
);
