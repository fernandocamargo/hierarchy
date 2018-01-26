import { compose, withProps, withHandlers } from 'recompose';

// import prevent from 'utils/dom/event/prevent';

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
    toggle: () => event => {
      event.preventDefault();
      console.log('toggle();');
      return event;
    },
    add: () => event => {
      event.preventDefault();
      console.log('add();');
      return event;
    },
    remove: () => event => {
      event.preventDefault();
      console.log('remove();');
      return event;
    },
  }),
  withProps(props => ({
    actions: getActions(props),
  })),
);
