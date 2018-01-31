import React, { Fragment } from 'react';

import GUI from 'components/gui';
import Uploader from 'components/uploader';
import Editor from 'components/editor';

export default ({ source, nodes, toggle, add, remove, drop, paste }) => (
  <Fragment>
    <GUI nodes={nodes} actions={{ toggle, add, remove }} />
    <Uploader onDrop={drop} onPaste={paste}>
      <Editor source={source} />
    </Uploader>
  </Fragment>
);
