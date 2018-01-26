import noop from 'lodash/noop';
import React from 'react';
import { node, any, func } from 'prop-types';
import classnames from 'classnames';

export const propTypes = {
  title: node.isRequired,
  className: any,
  action: func,
};

export const defaultProps = {
  className: undefined,
  action: noop,
};

export default Object.assign(
  ({ title, className, action }) => (
    <li className={classnames('action', className)}>
      <a href="" title={title} onClick={action}>
        {title}
      </a>
    </li>
  ),
  {
    displayName: 'Action',
    propTypes,
    defaultProps,
  },
);
