import React from 'react';
import Dropzone from 'react-dropzone';

export default ({ register, children, onDrop, onPaste }) => (
  <Dropzone
    onDrop={onDrop}
    className="app"
    disablePreview={true}
    disableClick={true}
    multiple={false}
    onPaste={onPaste}
    ref={register}
  >
    {children}
  </Dropzone>
);
