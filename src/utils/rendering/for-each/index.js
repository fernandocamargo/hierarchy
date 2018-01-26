import ensure from 'utils/array/ensure';
import render from 'utils/rendering/render';

export default collection => ({
  render: (...params) => ensure(collection).map(render(...params)),
});
