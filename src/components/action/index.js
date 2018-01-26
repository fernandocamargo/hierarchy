import noop from 'lodash/noop';
import React from 'react';
import { node, any, func } from 'prop-types';
import classnames from 'classnames';

export const propTypes = {
  title: node.isRequired,
  className: any,
  handler: func,
};

export const defaultProps = {
  className: undefined,
  handler: noop,
};

export default Object.assign(
  ({ title, className, handler }) => (
    <li className={classnames('action', className)}>
      <a href="" title={title} onClick={handler}>
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
