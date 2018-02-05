import React from 'react';

import prevent from 'utils/dom/event/prevent';

export default ({ browse }) => (
  <nav>
    <h4>Options</h4>
    <ul>
      <li className="action toggle">
        <a href="" title="Toggle editor">
          Toggle editor
        </a>
      </li>
      <li className="action browse">
        <a href="" title="Browse files" onClick={prevent(browse)}>
          Browse files
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
      <li className="action download disabled">
        <a href="" title="Download source">
          Download source
        </a>
      </li>
    </ul>
  </nav>
);
