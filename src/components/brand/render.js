import React from 'react';

export default ({ name, url }) => (
  <h2 className="brand">
    <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
      {name}
    </a>
  </h2>
);
