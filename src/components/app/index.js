import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';

import GUI from 'components/gui';
import Editor from 'components/editor';

export default class extends Component {
  state = {
    source: {},
  };

  load = ({ currentTarget: { result } }) =>
    this.setState({ source: JSON.parse(result) });

  extract = file =>
    Object.assign(new FileReader(), {
      onload: this.load,
    }).readAsBinaryString(file);

  drop = files => files.forEach(this.extract);

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

  render() {
    const { state: { source }, getUploader } = this;
    const uploader = getUploader();

    return (
      <Fragment>
        <GUI />
        <Dropzone {...uploader}>
          <Editor source={source} />
        </Dropzone>
      </Fragment>
    );
  }
}
