import { compose, lifecycle, withStateHandlers, withHandlers } from 'recompose';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import property from 'utils/object/property';
import connect from 'utils/state/connect';
import get from 'utils/clipboard/get';
import drop from 'utils/dom/event/drop';

import { initial, set, toggle, add, remove } from './reducers';

export const setCycle = {
  componentDidMount() {
    const { props: { set, source } } = this;

    set(source);
  },
};

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
  drop: ({ set }) => drop().then(set),
};

export default compose(
  DragDropContext(HTML5Backend),
  withStateHandlers(initial, setState),
  withHandlers(mapEvents),
  lifecycle(setCycle),
);
