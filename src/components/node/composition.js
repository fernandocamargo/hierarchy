import { compose, shouldUpdate, withHandlers, withProps } from 'recompose';

import bind from 'utils/function/bind';
import only from 'utils/object/only';

export const onlyWhen = (current, next) =>
  current.name !== next.name ||
  current.position !== next.position ||
  current.employees !== next.employees ||
  current.expanded !== next.expanded ||
  current.path !== next.path;

export const mapEvents = {
  toggle: ({ path, actions: { toggle } }) => bind(toggle).with(path),
  add: ({ path, actions: { add } }) => bind(add).with(path),
  remove: ({ path, actions: { remove } }) => bind(remove).with(path),
};

export const getProps = ({
  employees,
  expanded,
  actions,
  toggle,
  add,
  remove,
}) => ({
  actions: {
    features: {
      toggle: only(toggle).when(!!employees.length),
      add,
      remove,
    },
  },
  nodes: expanded && { nodes: employees, actions },
});

export default compose(
  shouldUpdate(onlyWhen),
  withHandlers(mapEvents),
  withProps(getProps),
);
