export default handler => event => {
  event.preventDefault();
  handler();

  return event;
};
