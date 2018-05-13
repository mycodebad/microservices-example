
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Root from './containers/Root';
import './utils/front';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
 