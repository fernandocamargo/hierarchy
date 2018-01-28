export const fill = value => (stack, key, index) => ({
  [key]: !index ? value : stack,
});

export default (path, value) =>
  path
    .slice()
    .reverse()
    .reduce(fill(value), {});
