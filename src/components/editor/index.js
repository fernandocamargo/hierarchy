import React from 'react';

export default ({ source }) => (
  <div className="component editor">
    <pre className="source">{JSON.stringify(source, null, 2)}</pre>
  </div>
);
