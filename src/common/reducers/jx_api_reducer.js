import debuglog from 'loglevel';
import { REQUEST_API_CALL, RECEIVE_API_CALL, FAILED_API_CALL } from '../actions/jx_api_actions';
import { deepClone } from '../lib/objectutils';

export const rdAPIInitialState = { apidata: [] };

export function rdAPI(state = rdAPIInitialState, action)
{
	var a = null, key = '';
	switch (action.type)
	{
		case REQUEST_API_CALL:
			{
				a = deepClone(state.apidata); // TODO: this is a very costly operation - how to improve?
				key = action.tag;
				a[key] = {
					isFetching: true,
					model: action.model,
					exception: null
				};
				debuglog.info('rdAPI.REQUEST_API_CALL', a[key]);
				return Object.assign({}, state, {
					apidata: a
				});
			}
		case RECEIVE_API_CALL:
			{
				a = deepClone(state.apidata); // TODO: this is a very costly operation - how to improve?
				key = action.tag;
				a[key] = {
					isFetching: false,
					lastUpdated: action.receivedAt,
					model: action.model,
					data: action.data,
					exception: null
				};
				debuglog.info('rdAPI.RECEIVE_API_CALL', a[key]);
				return Object.assign({}, state, {
					apidata: a
				});
			}
		case FAILED_API_CALL:
			{
				a = deepClone(state.apidata); // TODO: this is a very costly operation - how to improve?
				key = action.tag;
				a[key] = {
					isFetching: false,
					lastUpdated: action.receivedAt,
					model: action.model,
					data: action.data,
					exception: action.exception
				};
				debuglog.info('rdAPI.RECEIVE_API_CALL', a[key]);
				return Object.assign({}, state, {
					apidata: a
				});
			}
		default:
			return state;
	}
}