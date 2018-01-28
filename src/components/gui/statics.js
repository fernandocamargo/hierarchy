import { shape, func } from 'prop-types';

import * as Nodes from 'components/nodes/statics';

export const propTypes = {
  actions: shape({
    toggle: func.isRequired,
    add: func.isRequired,
    remove: func.isRequired,
  }).isRequired,
  ...Nodes.propTypes,
};

export const defaultProps = {
  ...Nodes.defaultProps,
};

export const displayName = 'GUI';

