import map from 'lodash/map';
import flatten from 'lodash/flatten';
import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';

import GUI from 'components/gui';
import Editor from 'components/editor';

export default class extends Component {
  state = {
    source: {},
    nodes: [],
  };

  getUploader = () => ({
    accept: '.json',
    className: 'component editor',
    activeClassName: 'intention',
    acceptClassName: 'accepting',
    rejectClassName: 'rejecting',
    disableClick: true,
    multiple: false,
    onDrop: this.drop,
  });

  getNodes = source => map(source, this.format);

  getActions = () => {
    const { toggle, add, remove } = this;

    return { toggle, add, remove };
  };

  toggle = () => console.log('toggle();');

  add = () => console.log('add();');

  remove = () => console.log('remove();');

  format = ({ position, employees }, name) => ({
    employees: flatten(employees.map(this.getNodes)),
    expanded: true,
    name,
    position,
  });

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
