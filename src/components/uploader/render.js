import React from 'react';
import Dropzone from 'react-dropzone';

export default ({ children, onDrop, onPaste, set }) => (
  <Dropzone
    className="app"
    disablePreview={true}
    disableClick={true}
    multiple={false}
    onDrop={onDrop}
    onPaste={onPaste}
    ref={set}
  >
    {children}
  </Dropzone>
);
