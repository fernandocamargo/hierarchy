import React from 'react';
import Dropzone from 'react-dropzone';

export default ({ children, onDrop, onPaste, set }) => (
  <Dropzone
    onDrop={onDrop}
    className="app"
    disablePreview={true}
    disableClick={true}
    multiple={false}
    onPaste={onPaste}
    ref={set}
  >
    {children}
  </Dropzone>
);
