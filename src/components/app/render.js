import React from 'react';

import GUI from 'components/gui';
import Uploader from 'components/uploader';
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
}) => (
  <Uploader onDrop={drop} onPaste={paste}>
    <GUI
      nodes={nodes}
      actions={{ toggle, add, remove }}
      fullscreen={!editor.active}
    />
    <nav>
      <h4>Options</h4>
      <ul>
        <li className="action toggle">
          <a href="" title="Toggle editor">
            Toggle editor
          </a>
        </li>
        <li className="action load">
          <a href="" title="Load source">
            Load source
          </a>
        </li>
        <li className="action clear">
          <a href="" title="Clear editor">
            Clear editor
          </a>
        </li>
        <li className="action edit">
          <a href="" title="Edit source">
            Edit source
          </a>
        </li>
        <li className="action download">
          <a href="" title="Download source">
            Download source
          </a>
        </li>
      </ul>
    </nav>
    <Editor source={source} active={editor.active} />
  </Uploader>
);
