import React, { Fragment } from 'react';
import Dropzone from 'react-dropzone';

export default ({ children, onDrop, onPaste }) => (
  <Dropzone
    onDrop={onDrop}
    accept=".json"
    className="component editor"
    activeClassName="intention"
    acceptClassName="accepting"
    rejectClassName="rejecting"
    disableClick={true}
    multiple={false}
    onPaste={onPaste}
  >
    {children}
  </Dropzone>
);
