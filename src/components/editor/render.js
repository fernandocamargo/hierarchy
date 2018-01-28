import React from 'react';

export default ({ source }) => (
  <pre className="source">{JSON.stringify(source, null, 2)}</pre>
);
