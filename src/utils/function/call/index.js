import ensure from 'utils/function/ensure';
import accumulate from 'utils/function/accumulate';

export default callback => ({
  safely: (...params) => accumulate(ensure, callback, params),
});
