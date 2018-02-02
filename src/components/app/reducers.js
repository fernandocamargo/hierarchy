import update from 'immutability-helper';
import Chance from 'chance';

import fill from 'utils/object/fill';
import get from 'utils/nodes/get';

export const generator = new Chance();

export const initial = () => ({
  editor: {
    active: true,
    disabled: true,
  },
  source: {},
  nodes: [],
});

export const set = content => state => {
  const source = JSON.parse(content);
  const nodes = get(source);

  return {
    source,
    nodes,
  };
};

export const toggle = ({ nodes }) => state =>
  update(state, {
    nodes: fill(nodes, { $toggle: ['expanded'] }),
  });

export const add = ({ source, nodes }) => state => {
  const name = generator.first();
  const position = generator.profession({ rank: true });
  const employees = [];

  return update(state, {
    source: fill(source.concat('employees'), {
      $push: [
        {
          [name]: {
            position,
            employees,
          },
        },
      ],
    }),
    nodes: fill(nodes.concat('employees'), {
      $push: [
        {
          expanded: true,
          name,
          position,
          employees,
        },
      ],
      $apply: employees => {
        console.log({ employees });
        return employees;
      },
    }),
  });
};

export const remove = ({ source, nodes }) => state =>
  update(state, {
    source: fill(source.slice(0, -2), {
      $splice: [[source.slice(-2)[0], 1]],
    }),
    nodes: fill(nodes.slice(0, -1), {
      $splice: [[nodes.slice(-1), 1]],
    }),
  });
