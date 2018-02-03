import { compose, lifecycle } from 'recompose';
import { findDOMNode } from 'react-dom';

import highlight from 'utils/source/highlight';

export const replace = component => {
  const { props: { source } } = component;
  const node = findDOMNode(component);

  node.innerHTML = highlight(source);
};

export default compose(
  lifecycle({
    componentDidMount() {
      return replace(this);
    },
    componentDidUpdate() {
      return replace(this);
    },
  }),
);
