import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_API_CALL, receiveAPICall, failedAPICall } from '../actions/jx_api_actions';
import { handleRequest } from './jx_api_base';
import { makeUrlFromModel } from '../lib/objectutils';

function requestRepo(model = {})
{
	return handleRequest(makeUrlFromModel(model));
}

function* requestRepoSaga(action)
{
	try
	{
		const repos = yield call(requestRepo, action.model);
		yield put(receiveAPICall(action.tag, action.model, repos));
	} catch (e)
	{
		yield put(failedAPICall(action.tag, action.model, null, e));
	}
}

function* repoSaga()
{
	yield takeLatest(REQUEST_API_CALL, requestRepoSaga);
}

export default repoSaga;