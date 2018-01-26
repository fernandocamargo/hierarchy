import assert from 'utils/function/assert';
import wrap from 'utils/function/wrap';

export default object => (assert(object) ? object : wrap(object));
