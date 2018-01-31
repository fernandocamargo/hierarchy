import values from 'utils/object/values';
import format from 'utils/node/format';

export default (node, path = { source: [], nodes: [] }) =>
  values(node, format(path));
