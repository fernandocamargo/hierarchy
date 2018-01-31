import React, { Fragment } from 'react';
import Dropzone from 'react-dropzone';

import GUI from 'components/gui';
import Editor from 'components/editor';

export default ({ source, nodes, toggle, add, remove, drop, paste }) => (
  <Fragment>
    <GUI nodes={nodes} actions={{ toggle, add, remove }} />
    <Dropzone
      onDrop={drop}
      accept=".json"
      className="component editor"
      activeClassName="intention"
      acceptClassName="accepting"
      rejectClassName="rejecting"
      disableClick={true}
      multiple={false}
      onPaste={paste}
    >
      <Editor source={source} />
    </Dropzone>
  </Fragment>
);
