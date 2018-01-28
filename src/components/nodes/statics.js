import { arrayOf, shape } from 'prop-types';

import * as Node from 'components/node/statics';

export const propTypes = {
  nodes: arrayOf(shape(Node.propTypes)),
};

export const defaultProps = {
  nodes: [],
};

export const displayName = 'Nodes';
