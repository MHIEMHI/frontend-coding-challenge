import * as storage from 'redux-storage';
import { combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import { rdAPI } from '../reducers/jx_api_reducer'
import debuglog from 'loglevel';
import repoSaga from '../api/jx_api_saga';

// Some global variables here ===============================================================================================

// Middleware, storage, logger etc.
var //middleware = null,
	//storageEngine = null,
	loggerMiddleware = null,
	sagaMiddleware = null;
	
var jxapp = null, // Our app object
	jxstore = null; // Our data store

export function initStore()
{
	initGlobalStore({
		//reducers
		rdAPI,
	}); // TODO nodebug for release
}

// Global store initialization (aka app startup) function
export function initGlobalStore(reducers, nologging)
{
	// storageEngine = createEngine('jx.1');

	loggerMiddleware = createLogger();
	sagaMiddleware = createSagaMiddleware();

	jxapp = storage.reducer(combineReducers(reducers || {}));

	// middleware = storage.createMiddleware(storageEngine);
	// createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

	if (!nologging)
	{
		debuglog.info('initGlobalStore with logger');
		jxstore = createStore(
				jxapp,
				applyMiddleware(
					sagaMiddleware,
					loggerMiddleware // neat middleware that logs actions
				)
			);
		
		sagaMiddleware.run(repoSaga);
	}
}

// Get global store object
export function getGlobalStore()
{
	return jxstore;
}

// Get global app object
export function getGlobalApp()
{
	return jxapp;
}

