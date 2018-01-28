import call from 'utils/function/call';

export default object => ({
  with: (...params) => () => call(object).safely(...params),
});
