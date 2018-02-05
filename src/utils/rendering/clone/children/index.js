import { Children } from 'react';

import clone from 'utils/rendering/clone/element';

export default (children, props) => Children.map(children, clone(props));
