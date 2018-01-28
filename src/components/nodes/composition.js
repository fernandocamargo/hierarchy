import { compose, withProps } from 'recompose';

import copy from 'utils/object/copy';

export const getNodes = ({ nodes }) => ({
  nodes: nodes.map(copy('name').as('key')),
});

export default compose(withProps(getNodes));
