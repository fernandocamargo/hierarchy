import assert from 'utils/function/assert';
import ensure from 'utils/array/ensure';

export const accumulate = (callback, params, ...rest) => {
  const chainable = assert(callback);
  const last = !rest.length || !chainable;
  const chain = chainable ? callback(...ensure(params)) : callback;

  return last ? chain : accumulate(chain, ...rest);
};

export default accumulate;
