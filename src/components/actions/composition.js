import { compose, withProps } from 'recompose';

export const getActions = ({ toogle, add, remove }) => [
  {
    className: 'toogle',
    title: 'Toogle',
    action: toogle,
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
  withProps(props => ({
    actions: getActions(props),
  })),
);
