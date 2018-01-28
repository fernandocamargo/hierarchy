export default object => ({
  when: condition => (condition ? object : undefined),
});
