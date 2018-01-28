import { object, array } from 'prop-types';

export const propTypes = {
  source: object,
  nodes: array,
};

export const defaultProps = {
  source: {},
  nodes: [],
};

export const displayName = 'App';
