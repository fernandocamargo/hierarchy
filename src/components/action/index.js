import React from 'react';
import { node, any } from 'prop-types';
import classnames from 'classnames';

export const propTypes = {
  title: node.isRequired,
  className: any,
};

export const defaultProps = {
  className: undefined,
};

export default Object.assign(
  ({ title, className }) => (
    <li className={classnames('action', className)}>
      <a href="" title={title}>
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
