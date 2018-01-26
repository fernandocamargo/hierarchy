import { compose, withProps, withHandlers } from 'recompose';

import prevent from 'utils/dom/event/prevent';

export const getActions = ({ toggle, add, remove }) => [
  {
    className: 'toggle',
    title: 'Toggle',
    action: toggle,
  },
  {
    className: 'add',
    title: 'Add random employee',
    action: add,
  },
  {
    className: 'remove',
    title: 'Remove employee',
    action: remove,
  },
];

export default compose(
  withHandlers({
    toggle: ({ log }) => prevent(log),
    add: ({ log }) => prevent(log),
    remove: ({ log }) => prevent(log),
  }),
  withProps(props => ({
    actions: getActions(props),
  })),
);
