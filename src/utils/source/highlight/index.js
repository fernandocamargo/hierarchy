import Prism from 'prismjs';

import json from 'constants/languages/json';
import format from 'utils/source/format';

export default source => Prism.highlight(format(source), json);
