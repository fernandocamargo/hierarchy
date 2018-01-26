import map from 'lodash/map';
import flatten from 'lodash/flatten';
import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';

import GUI from 'components/gui';
import Editor from 'components/editor';

export default class extends Component {
  state = {
    source: {},
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

  getNodes = source => {
    const { state, format } = this;

    return map(source || state.source, format);
  };

  format = ({ position, employees }, name) => ({
    employees: flatten(employees.map(this.getNodes)),
    name,
    position,
  });

  save = ({ currentTarget: { result } }) =>
    this.setState({ source: JSON.parse(result) });

  read = file =>
    Object.assign(new FileReader(), {
      onload: this.save,
    }).readAsBinaryString(file);

  drop = files => files.forEach(this.read);

  render() {
    const { state: { source }, getNodes, getUploader } = this;
    const uploader = getUploader();
    const nodes = getNodes();

    return (
      <Fragment>
        <GUI nodes={nodes} />
        <Dropzone {...uploader}>
          <Editor source={source} />
        </Dropzone>
      </Fragment>
    );
  }
}
