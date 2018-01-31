import { compose, withStateHandlers, withHandlers } from 'recompose';

import property from 'utils/object/property';
import read from 'utils/file-reader/read';
import get from 'utils/clipboard/get';

import { set, toggle, add, remove } from './reducers';

export const setInitialState = () => ({
  source: {},
  nodes: [],
});

export const mapEvents = {
  toggle: property('toggle'),
  add: property('add'),
  remove: property('remove'),
  paste: ({ set }) => get().then(set),
  drop: ({ set }) => files => files.forEach(read().then(set)),
};

export default compose(
  withStateHandlers(setInitialState, {
    set: state => content => set(content)(state),
    toggle: state => path => toggle(path)(state),
    add: state => path => add(path)(state),
    remove: state => path => remove(path)(state),
  }),
  withHandlers(mapEvents),
);
