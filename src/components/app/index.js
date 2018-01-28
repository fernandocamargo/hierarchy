import update from 'immutability-helper';
import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';

import values from 'utils/object/values';
import flatten from 'utils/object/flatten';
import GUI from 'components/gui';
import Editor from 'components/editor';

export default class extends Component {
  state = {
    source: {},
    nodes: [],
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

  build = value => (stack, key, index) => ({ [key]: !index ? value : stack });

  fill = (path, value) =>
    path
      .slice()
      .reverse()
      .reduce(this.build(value), {});

  toggle = ({ nodes }) =>
    this.setState(state =>
      update(state, {
        nodes: this.fill(nodes, { $toggle: ['expanded'] }),
      }),
    );

  add = path => console.log('add();', path);

  remove = path => console.log('remove();', path);

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

  save = ({ currentTarget: { result } }) => this.setState(this.parse(result));

  read = file =>
    Object.assign(new FileReader(), {
      onload: this.save,
    }).readAsBinaryString(file);

  drop = files => files.forEach(this.read);

  render() {
    const { state: { source, nodes }, getActions, getUploader } = this;
    const uploader = getUploader();
    const actions = getActions();

    return (
      <Fragment>
        <GUI nodes={nodes} actions={actions} />
        <Dropzone {...uploader}>
          <Editor source={source} />
        </Dropzone>
      </Fragment>
    );
  }
}
