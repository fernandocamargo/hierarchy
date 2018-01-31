import accumulate from 'utils/function/accumulate';

export default reducer => state => (...params) =>
  accumulate(reducer, ...params, state);

