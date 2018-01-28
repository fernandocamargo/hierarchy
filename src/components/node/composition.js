import { compose, shouldUpdate } from 'recompose';

export default compose(
  shouldUpdate(
    (current, next) =>
      current.name !== next.name ||
      current.position !== next.position ||
      current.employees !== next.employees ||
      current.expanded !== next.expanded ||
      current.path !== next.path,
  ),
);
