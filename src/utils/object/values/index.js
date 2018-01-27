import clone from 'utils/object/clone';
import map from 'utils/collection/map';

export default (object, callback) =>
  Object.keys(clone(object)).map(map(object, callback));
