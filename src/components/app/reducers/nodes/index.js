import single from 'utils/array/single';
import removeAt from 'utils/immutability/remove-at';
import head from 'utils/array/head';
import fill from 'utils/object/fill';
import tail from 'utils/array/tail';

export { default as set } from 'utils/nodes/get';

export const create = () => [];

export const add = ({ nodes }, profile) =>
  fill(nodes.concat('employees'), {
    $push: [
      {
        expanded: true,
        ...profile,
      },
    ],
  });

export const toggle = ({ nodes }) => fill(nodes, { $toggle: ['expanded'] });

export const remove = ({ nodes }) =>
  single(nodes)
    ? { $splice: removeAt(head(nodes)) }
    : fill(nodes.slice(0, -1), {
        $splice: removeAt(tail(nodes)),
      });
