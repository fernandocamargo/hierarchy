import React from 'react';
import Dropzone from 'react-dropzone';

export default ({ children, onDrop, onPaste }) => (
  <Dropzone
    onDrop={onDrop}
    accept=".json"
    className="app"
    activeClassName="intention"
    acceptClassName="accepting"
    rejectClassName="rejecting"
    disableClick={true}
    multiple={false}
    onPaste={onPaste}
    ref={console.log}
  >
    {() => children}
  </Dropzone>
);
