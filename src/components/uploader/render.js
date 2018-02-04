import React from 'react';
import Dropzone from 'react-dropzone';

export default ({ children, onDrop, onPaste }) => (
  <Dropzone
    onDrop={onDrop}
    className="app"
    disableClick={true}
    multiple={false}
    onPaste={onPaste}
    ref={() => {}}
  >
    {children}
  </Dropzone>
);
