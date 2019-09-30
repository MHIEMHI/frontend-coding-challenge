import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getGlobalStore, initStore } from './common/store/store';
import debuglog  from 'loglevel';



debuglog.setLevel('DEBUG'); // TODO release version...
debuglog.info('Starting up JS Challenge');

var root = document.getElementById('root');
debuglog.info('calling initStore');
initStore();
debuglog.info('Initial state', getGlobalStore().getState());

ReactDOM.render(
	<Provider store={getGlobalStore()}>
		<App />
	</Provider>,
	root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
