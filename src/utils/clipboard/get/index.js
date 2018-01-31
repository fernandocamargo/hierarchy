import call from 'utils/function/call';

export default () => ({
  then: callback => ({ clipboardData }) =>
    call(callback).safely(clipboardData.getData('Text')),
});
