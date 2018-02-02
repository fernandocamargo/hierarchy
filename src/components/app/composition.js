import { compose, withStateHandlers, withHandlers } from 'recompose';

import property from 'utils/object/property';
import connect from 'utils/state/connect';
import read from 'utils/file-reader/read';
import get from 'utils/clipboard/get';

import { initial, set, toggle, add, remove } from './reducers';

export const setState = {
  set: connect(set),
  toggle: connect(toggle),
  add: connect(add),
  remove: connect(remove),
};

export const mapEvents = {
  toggle: property('toggle'),
  add: property('add'),
  remove: property('remove'),
  paste: ({ set }) => get().then(set),
  drop: ({ set }) => files => files.forEach(read().then(set)),
};

export default compose(
  withStateHandlers(initial, setState),
  withHandlers(mapEvents),
);
