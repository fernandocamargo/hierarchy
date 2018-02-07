import noop from 'utils/function/noop';

export const initial = () => ({
  dragging: false,
  browse: noop,
});

export const register = instance => state => ({
  browse: instance.open.bind(instance),
});

export const drag = () => state => ({
  dragging: true,
});

export const drop = () => state => ({
  dragging: false,
});
