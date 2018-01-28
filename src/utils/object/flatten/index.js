import ensure from 'utils/array/ensure';
import args from 'utils/function/args';

export default collection =>
  ensure(collection).reduce(args(Object.assign, 2), {});
