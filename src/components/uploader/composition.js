import { cloneElement, Children } from 'react';
import { compose, withProps } from 'recompose';

import assert from 'utils/string/assert';

export const getProps = ({ children }) => ({
  children: ({ isDragActive }) =>
    Children.map(children, child => {
      const { type } = child;
      const native = assert(type);

      return native
        ? child
        : cloneElement(child, {
            uploading: isDragActive,
          });
    }),
});

export default compose(withProps(getProps));
