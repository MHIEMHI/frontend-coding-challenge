
import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';

// fetch function that returns a bluebird promise
// will RESOLVE with null as parameter in case of a network error
export function jxfetch()
{
	return Promise.resolve(fetch.apply(null, arguments).then(a => a, b => null));
}