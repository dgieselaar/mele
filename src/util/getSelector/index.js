// @flow
import getSelectorType from '../getSelectorType';
import * as selectors from '../parseSelector';
import type { MatchingFunction } from '../parseSelector';

export default (selector:string|Function):MatchingFunction => {
	let type:string = getSelectorType(selector),
		matchingFunction:MatchingFunction = selectors[type](selector);

	return matchingFunction;
};
