import React from 'react';
import getSelector from '.';
import type MatchingFunction from '.';

test('returns a MatchingFunction for a selector', () => {
	let element:any = <div className="foo"/>,
		matchingFunction:MatchingFunction = getSelector('.foo');

	expect(matchingFunction(element)).toBeTruthy();
});
