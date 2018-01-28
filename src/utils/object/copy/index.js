export default property => ({
  as: alias => object => ({ ...object, [alias]: object[property] }),
});
