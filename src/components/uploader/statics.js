import { func } from 'prop-types';

export const propTypes = {
  onDrop: func.isRequired,
  onPaste: func.isRequired,
};

export const defaultProps = {};

export const displayName = 'Uploader';
