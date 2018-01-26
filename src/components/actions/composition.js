import { compose, withProps, withHandlers } from 'recompose';

// import prevent from 'utils/dom/event/prevent';

export const getActions = ({ toggle, add, remove }) => [
  {
    className: 'toggle',
    title: 'Toggle',
    handler: toggle,
  },
  {
    className: 'add',
    title: 'Add random employee',
    handler: add,
  },
  {
    className: 'remove',
    title: 'Remove employee',
    handler: remove,
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
