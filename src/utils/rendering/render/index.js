import { createElement } from 'react';

export default (component, overwritten = {}) => (props, key = Math.random()) =>
  createElement(component, {
    key: overwritten.key || props.key || key,
    ...props,
    ...overwritten,
  });
