import { createElement } from 'react';

export default (component, overwritten = {}) => (props, key = Math.random()) =>
  createElement(component, {
    key: props.key || overwritten.key || key,
    ...props,
    ...overwritten,
  });
