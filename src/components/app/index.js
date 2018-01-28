import update from 'immutability-helper';
import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import Chance from 'chance';

import values from 'utils/object/values';
import flatten from 'utils/object/flatten';
import fill from 'utils/object/fill';
import GUI from 'components/gui';
import Editor from 'components/editor';

import source from 'mock/source';
import nodes from 'mock/nodes';

export const generator = new Chance();

export default class extends Component {
  state = {
    source,
    nodes,
  };

  getUploader = () => ({
    onDrop: this.drop,
    accept: '.json',
    className: 'component editor',
    activeClassName: 'intention',
    acceptClassName: 'accepting',
    rejectClassName: 'rejecting',
    disableClick: true,
    multiple: false,
  });

  getNodes = (node, path = { source: [], nodes: [] }) =>
    values(node, this.format(path));

  getActions = () => {
    const { toggle, add, remove } = this;

    return { toggle, add, remove };
  };

  getEmployess = ({ path: { source, nodes }, employees }) =>
    this.getNodes(flatten(employees), {
      source: source.concat('employees'),
      nodes: nodes.concat('employees'),
    });

  toggle = ({ nodes }) =>
    this.setState(state =>
      update(state, {
        nodes: fill(nodes, { $toggle: ['expanded'] }),
      }),
    );

  add = ({ nodes }) =>
    this.setState(state =>
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
      }),
    );

  remove = ({ nodes }) =>
    this.setState(state =>
      update(state, {
        nodes: fill(nodes.slice(0, -1), {
          $splice: [[nodes.slice(-1), 1]],
        }),
      }),
    );

  format = ({ source, nodes }) => (details, name, index) => {
    const person = {
      ...details,
      path: {
        source: source.concat(name),
        nodes: nodes.concat(index),
      },
      expanded: true,
      name,
    };

    return Object.assign(person, {
      employees: this.getEmployess(person),
    });
  };

  parse = content => {
    const source = JSON.parse(content);
    const nodes = this.getNodes(source);

    return {
      source,
      nodes,
    };
  };

  save = data => this.setState(this.parse(data));

  load = ({ currentTarget: { result } }) => this.save(result);

  read = file =>
    Object.assign(new FileReader(), {
      onload: this.load,
    }).readAsBinaryString(file);

  drop = files => files.forEach(this.read);

  paste = ({ clipboardData }) => this.save(clipboardData.getData('Text'));

  render() {
    const { state: { source, nodes }, getActions, getUploader, paste } = this;
    const uploader = getUploader();
    const actions = getActions();

    return (
      <Fragment>
        <GUI nodes={nodes} actions={actions} />
        <Dropzone {...uploader} onPaste={paste}>
          <Editor source={source} />
        </Dropzone>
      </Fragment>
    );
  }
}
