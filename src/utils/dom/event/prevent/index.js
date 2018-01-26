import call from 'utils/function/call';

export default callback => event => {
  event.preventDefault();
  call(callback).safely();

  return event;
};
