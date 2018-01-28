import { node, oneOfType, string, array, object, func } from 'prop-types';

import noop from 'utils/function/noop';

export const propTypes = {
  title: node.isRequired,
  className: oneOfType([string, array, object]),
  action: func,
};

export const defaultProps = {
  action: noop,
};

export const displayName = 'Action';
