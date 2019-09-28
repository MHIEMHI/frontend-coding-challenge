export const REQUEST_API_CALL = 'REQUEST_API_CALL';

export function requestAPICall(tag, model)
{
	return {
		type: REQUEST_API_CALL,
		tag,
		model
	};
}

export const RECEIVE_API_CALL = 'RECEIVE_API_CALL';

export function receiveAPICall(tag, model, data)
{
	return {
		type: RECEIVE_API_CALL,
		tag,
		model,
		data,
		receivedAt: Date.now()
	};
}

export const FAILED_API_CALL = 'FAILED_API_CALL';

export function failedAPICall(tag, model, data, exception)
{
	return {
		type: FAILED_API_CALL,
		tag,
		model,
		data,
		exception,
		receivedAt: Date.now()
	};
}
