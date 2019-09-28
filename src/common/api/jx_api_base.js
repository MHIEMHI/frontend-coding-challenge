import Promise from 'bluebird';
import debuglog from 'loglevel';
import { jxfetch } from '../lib/promise';

var _msg;
export const __base_url = 'https://api.github.com/search/repositories';

// avoids presenting multiple api messages in a row (in case they're all executed in parallel)
function apimessage(m)
{
	// messge showing not blocked?
	if (!_msg)
	{
		// show message
		//msg(m);
		debuglog.error(m);
		// don't show any more api messages until a new api request starts
		_msg = 1;
	}
}

export function handleRequest (url)
{
	////dispatch(requestAPICall(tag, apisequence, modulename, controllername, functionname, model));

	return new Promise((resolve, reject) =>
	{
		//freezeUI();

		return jxfetch(
			url,
			{
				headers:
				{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'GET'
			}	
		).then(response =>
		{
			if (!response)
			{
				// network error
				apimessage('Network error. Please check your connection to the Internet and try again.'); // TODO text
			}
			else
			{
				// response status "OK"?
				if (response.status === 200)
				{
					// note that if deserializing fails, we will land in the catch clause
					return response.json();
				}
				// bad HTTP status
				apimessage(' bad HTTP status ' + response.status);
			}
			// reject the promise
			reject();
		}).then(json =>
		{
			// catch the bad response status case
			if (json !== undefined)
			{
				resolve(json);
			}
		}).catch(exception =>
		{
			apimessage('An unexpected error occurred'); // TODO text

			////dispatch(failedAPICall(tag, apisequence, modulename, controllername, functionname, model, null, exception));

			// reject the promise
			reject(exception);
		}).finally(() =>
		{
			// unfreeze UI in any case, even if there was an unhandled exception
			//unfreezeUI();
		});
	});
} 