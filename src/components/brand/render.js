import React from 'react';

export default ({ name, url }) => (
  <h1 className="brand">
    <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
      {name}
    </a>
  </h1>
);
