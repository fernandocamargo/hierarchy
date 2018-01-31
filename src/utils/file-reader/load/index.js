import call from 'utils/function/call';

export default callback => ({ currentTarget: { result } }) =>
  call(callback).safely(result);
