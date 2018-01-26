import React from 'react';
import { shape, func } from 'prop-types';

import Brand from 'components/brand';
import Nodes, * as NodesStatic from 'components/nodes';

export const propTypes = {
  actions: shape({
    toggle: func.isRequired,
    add: func.isRequired,
    remove: func.isRequired,
  }).isRequired,
  ...NodesStatic.propTypes,
};

export const defaultProps = {
  ...NodesStatic.defaultProps,
};

export const displayName = 'GUI';

export default Object.assign(
  ({ nodes, actions }) => (
    <div className="component gui">
      <Brand name="Personio" url="https://www.personio.de/" />
      <Nodes nodes={nodes} actions={actions} />
    </div>
  ),
  {
    displayName,
    propTypes,
    defaultProps,
  },
);
