import React from 'react';
import { object } from 'prop-types';

export const propTypes = {
  source: object,
};

export const defaultProps = {
  source: {},
};

export default Object.assign(
  ({ source }) => (
    <pre className="source">{JSON.stringify(source, null, 2)}</pre>
  ),
  {
    displayName: 'Editor',
    propTypes,
    defaultProps,
  },
);
