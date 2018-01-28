import call from 'utils/function/call';

export default (callback, amomunt = 0) => (...params) =>
  call(callback).safely(...params.slice(0, amomunt));
