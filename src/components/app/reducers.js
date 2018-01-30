import update from 'immutability-helper';
import Chance from 'chance';

import fill from 'utils/object/fill';

export const generator = new Chance();

export const toggle = ({ nodes }) => state =>
  update(state, {
    nodes: fill(nodes, { $toggle: ['expanded'] }),
  });

export const add = ({ nodes }) => state =>
  update(state, {
    nodes: fill(nodes.concat('employees'), {
      $push: [
        {
          name: generator.first(),
          position: generator.profession({ rank: true }),
          expanded: true,
          employees: [],
        },
      ],
    }),
  });

export const remove = ({ nodes }) => state =>
  update(state, {
    nodes: fill(nodes.slice(0, -1), {
      $splice: [[nodes.slice(-1), 1]],
    }),
  });
