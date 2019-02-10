import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from 'containers/TodoContainer';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoContainer />, document.getElementById('root'));
serviceWorker.unregister();
