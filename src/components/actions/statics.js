import { arrayOf, shape } from 'prop-types';

import * as Action from 'components/action/statics';

export const propTypes = {
  actions: arrayOf(shape(Action.propTypes)),
};

export const displayName = 'Actions';
