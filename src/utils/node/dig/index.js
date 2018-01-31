import flatten from 'utils/object/flatten';
import get from 'utils/nodes/get';

export default ({ path: { source, nodes }, ...node }, property) =>
  get(flatten(node[property]), {
    source: source.concat(property),
    nodes: nodes.concat(property),
  });
