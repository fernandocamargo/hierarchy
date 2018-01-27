import React from 'react';

import forEach from 'utils/rendering/for-each';
import Action from 'components/action';

export default ({ actions }) => (
  <dd className="actions">
    <nav>
      <h4>Options</h4>
      <ul>{forEach(actions).render(Action)}</ul>
    </nav>
  </dd>
);
