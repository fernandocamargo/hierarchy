import { cloneElement } from 'react';

import assert from 'utils/string/assert';

export default props => element => {
  const { type } = element;
  const native = assert(type);

  return native ? element : cloneElement(element, props);
};

