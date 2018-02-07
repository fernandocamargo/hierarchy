import { compose, withStateHandlers, withProps } from 'recompose';

import connect from 'utils/state/connect';
import clone from 'utils/rendering/clone/children';

import { initial, register, drag, drop } from './reducers';

export const setState = {
  register: connect(register),
  drag: connect(drag),
  drop: connect(drop),
};

export const getProps = ({ children, onDrop, drop, browse, dragging }) => ({
  drop: (...target) => drop(onDrop(...target)),
  children: ({ isDragActive }) =>
    clone(children, {
      uploading: !dragging && isDragActive,
      browse,
    }),
});

export default compose(
  withStateHandlers(initial, setState),
  withProps(getProps),
);
