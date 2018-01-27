import { node, any, func } from 'prop-types';

import noop from 'utils/function/noop';

export const propTypes = {
  title: node.isRequired,
  className: any,
  action: func,
};

export const defaultProps = {
  className: undefined,
  action: noop,
};

export const displayName = 'Action';
