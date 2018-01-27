import update from 'immutability-helper';
import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';

import values from 'utils/object/values';
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

  getNodes = (source, path = { source: [], nodes: [] }, index) =>
    values(source, this.format(path, index));

  getActions = () => {
    const { toggle, add, remove } = this;

    return { toggle, add, remove };
  };

  build = value => (stack, key, index) => ({ [key]: !index ? value : stack });

  update = (path, value) =>
    path
      .slice()
      .reverse()
      .reduce(this.build(value), {});

  toggle = ({ nodes }) =>
    this.setState(state =>
      update(state, {
        nodes: this.update(nodes, { $toggle: ['expanded'] }),
      }),
    );

  add = path => console.log('add();', path);

  remove = path => console.log('remove();', path);

  /*
  getEmployee = ({ source, nodes }) => (employees, employee, index) =>
    employees.concat(
      this.getNodes(employee, {
        source: source.concat(index),
        nodes,
      }),
    );

  getEmployees = ({ path: { source, nodes }, employees }) =>
    employees.reduce(
      this.getEmployee({
        source: source.concat('employees'),
        nodes: nodes.concat('employees'),
      }),
      [],
    );
  */

  getEmployees = (path, employees) =>
    employees.reduce(
      (s, e, i) =>
        s.concat(
          this.getNodes(
            e,
            {
              source: path.source.concat('employees'),
              nodes: path.nodes.concat('employees'),
            },
            i,
          ),
        ),
      [],
    );

  format = ({ source, nodes }, _index) => (
    { employees, ...person },
    name,
    index,
  ) => {
    const path = {
      source: source.concat(name),
      nodes: nodes.concat(!isNaN(_index) ? _index : index),
    };

    return {
      ...person,
      employees: this.getEmployees(path, employees),
      expanded: true,
      path,
      name,
    };
    /*
    const person = {
      ...infos,
      path: {
        source: source.concat(name),
        nodes: nodes.concat(index),
      },
      expanded: true,
      name,
    };

    return Object.assign(person, {
      employees: this.getEmployees(person),
    });
    */
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
