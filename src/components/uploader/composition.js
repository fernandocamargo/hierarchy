import { compose, withStateHandlers, withProps } from 'recompose';

import connect from 'utils/state/connect';
import clone from 'utils/rendering/clone/children';

import { initial, set } from './reducers';

export const setState = {
  set: connect(set),
};

export const getProps = ({ children, browse }) => ({
  children: ({ isDragActive }) =>
    clone(children, {
      uploading: isDragActive,
      browse,
    }),
});

export default compose(
  withStateHandlers(initial, setState),
  withProps(getProps),
);
