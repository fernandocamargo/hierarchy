import React from 'react';

import Uploader from 'components/uploader';
import GUI from 'components/gui';
import Menu from 'components/menu';
import Editor from 'components/editor';

export default ({
  source,
  nodes,
  toggle,
  add,
  remove,
  drop,
  paste,
  editor,
  uploading,
}) => (
  <Uploader onDrop={drop} onPaste={paste}>
    <GUI
      nodes={nodes}
      actions={{ toggle, add, remove }}
      fullscreen={!editor.active}
      empty={!nodes.length}
    />
    <Menu />
    <Editor
      source={source}
      active={editor.active}
      uploading={uploading}
      empty={!Object.keys(source).length}
    />
  </Uploader>
);
