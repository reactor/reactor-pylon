import 'core-js/fn/object/assign';

require('normalize.css');
require('styles/App.scss');

import Routes from 'components/routes';
import ReactDOM from 'react-dom';

ReactDOM.render(Routes, document.getElementById('app') );
