import call from 'utils/function/call';

export default (object, callback) => (key, index) =>
  call(callback).safely(object[key], key, index);
