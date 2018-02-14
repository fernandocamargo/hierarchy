import update from 'immutability-helper';
import Chance from 'chance';

import assert from 'utils/string/assert';

import * as nodes from './nodes';
import * as source from './source';

export const generator = new Chance();

export const initial = props => ({
  editor: {
    active: true,
    disabled: true,
  },
  source: source.create(props),
  nodes: nodes.create(props),
});

export const set = input => state => {
  const content = assert(input) ? JSON.parse(input) : input;

  return {
    source: source.set(content),
    nodes: nodes.set(content),
  };
};

export const add = path => state => {
  const profile = {
    name: generator.first(),
    position: generator.profession({ rank: true }),
    employees: [],
  };

  return update(state, {
    source: source.add(path, profile),
    nodes: nodes.add(path, profile),
  });
};

export const toggle = path => state =>
  update(state, {
    nodes: nodes.toggle(path),
  });

export const remove = path => state =>
  update(state, {
    source: source.remove(path),
    nodes: nodes.remove(path),
  });
