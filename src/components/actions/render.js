import React from 'react';

import forEach from 'utils/rendering/for-each';
import Action from 'components/action';

export default ({ features }) => (
  <dd className="actions">
    <nav>
      <h4>Options</h4>
      <ul>{forEach(features).render(Action)}</ul>
    </nav>
  </dd>
);
