import dig from 'utils/node/dig';

export default ({ source, nodes }) => (details, name, index) => {
  const person = {
    ...details,
    path: {
      source: source.concat(name),
      nodes: nodes.concat(index),
    },
    expanded: true,
    name,
  };

  return Object.assign(person, { employees: dig(person, 'employees') });
};
