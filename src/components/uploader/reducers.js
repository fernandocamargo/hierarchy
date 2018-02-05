import noop from 'utils/function/noop';

export const initial = () => ({
  browse: noop,
});

export const set = instance => state => ({
  browse: instance.open.bind(instance),
});
