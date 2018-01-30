import * as statics from './statics';
import compose from './composition';
import render from './render';

export default compose(Object.assign(render, statics));
