import React from 'react';
import { arrayOf, shape } from 'prop-types';

import forEach from 'utils/rendering/for-each';
import Action, { propTypes as actionPropTypes } from 'components/action';

export const propTypes = {
  actions: arrayOf(shape(actionPropTypes)),
};

export const defaultProps = {};

export default Object.assign(
  ({ actions }) => (
    <dd className="actions">
      <nav>
        <h4>Options</h4>
        <ul>{forEach(actions).render(Action)}</ul>
      </nav>
    </dd>
  ),
  {
    displayName: 'Actions',
    propTypes,
    defaultProps,
  },
);
