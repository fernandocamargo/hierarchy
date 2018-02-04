export default () => ({
  then: callback => data => data.getAsString(callback),
});
