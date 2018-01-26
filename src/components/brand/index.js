import React from 'react';
import { string } from 'prop-types';

export default Object.assign(
  ({ name, url }) => (
    <h1 className="brand">
      <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
        {name}
      </a>
    </h1>
  ),
  {
    displayName: 'Brand',
    propTypes: {
      name: string.isRequired,
      url: string.isRequired,
    },
  },
);
