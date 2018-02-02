import Prism from 'prismjs';
import { compose, lifecycle } from 'recompose';
import { findDOMNode } from 'react-dom';

import json from 'constants/languages/json';

const highlight = component => {
  const { props: { source } } = component;
  const node = findDOMNode(component);
  const code = JSON.stringify(source, null, 2);

  node.innerHTML = Prism.highlight(code, json);
};

export default compose(
  lifecycle({
    componentDidMount() {
      return highlight(this);
    },
    componentDidUpdate() {
      return highlight(this);
    },
  }),
);
