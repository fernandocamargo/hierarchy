import { node, array } from 'prop-types';

export const propTypes = {
  name: node.isRequired,
  position: node.isRequired,
  employees: array,
};

export const defaultProps = {
  employees: [],
};

export const displayName = 'Node';
