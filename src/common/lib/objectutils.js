import debuglog from 'loglevel';
import { __base_url } from '../api/jx_api_base';

//Deep clones obj, returns a new object
export function deepClone(obj)
{
	//debuglog.info('deepClone',obj);
	if (obj === undefined)
	{
		debuglog.error('Attempt to deepClone undefined object');
	}

	if (obj === null || typeof obj !== 'object')
	{
		// no need to clone this, it's not an object
		return obj;
	}

	// Tricky exploit to deep clone an object...
	// Will not clone prototype or methods, only data
	// http://heyjavascript.com/4-creative-ways-to-clone-objects/#
	return JSON.parse(JSON.stringify(obj));
}

export function getToday()
{
	let d = new Date();
	function pad(s) { return (s < 10) ? '0' + s : s; }
	return 	pad(d.getUTCFullYear()) + 
		'-' + pad((d.getUTCMonth() + 1)) +
		'-' + pad(d.getUTCDate());
}


export function makeUrlFromModel({ day = getToday(), sort = 'stars', desc = 'desc', page = 1 })
{
	return `${__base_url}?q=created:>=${day}&sort=${sort}&order=${desc}${page > 1 ? '&page='+page : '' }`;
}