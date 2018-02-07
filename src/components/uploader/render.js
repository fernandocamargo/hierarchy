import React from 'react';
import Dropzone from 'react-dropzone';

export default ({ children, onPaste, register, drag, drop }) => (
  <Dropzone
    className="app"
    disablePreview={true}
    disableClick={true}
    multiple={false}
    onPaste={onPaste}
    onDragStart={drag}
    onDrop={drop}
    ref={register}
  >
    {children}
  </Dropzone>
);
