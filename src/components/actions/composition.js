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

export const mapEvents = {
  toggle: ({ actions: { toggle } }) => prevent(toggle),
  add: ({ actions: { add } }) => prevent(add),
  remove: ({ actions: { remove } }) => prevent(remove),
};

export const getProps = props => ({
  actions: getActions(props),
});

export default compose(withHandlers(mapEvents), withProps(getProps));
