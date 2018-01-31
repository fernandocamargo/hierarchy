export default property => ({
  or: defaults => object => {
    const value = object[property];

    return value !== undefined ? value : defaults;
  },
});
