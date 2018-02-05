import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app';
import source from 'mock/source';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App source={source} />, document.getElementById('app'));
registerServiceWorker();
