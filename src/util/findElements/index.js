// @flow
import React from 'react';
import getSelector from '../getSelector';
import isString from '../isString';
import type { MatchingFunction } from '../parseSelector'; //eslint-disableline

export type ElementNode = {
	element:any,
	// needed for replace
	parent?:ElementNode,
	// needed for after/before. can't use === because identity changes in React.Children
	index:number
};

export default (root:any, selector:string|Function):Array<any> => {
	let matching:Array<any> = [],
		matchingFunction:MatchingFunction = getSelector(selector),
		parentNode:ElementNode;

	let inspectElement = (element:any, index:number):any => {
		if (isString(element)) {
			return;
		}

		let node:ElementNode = { element, parent: parentNode, index };

		if (matchingFunction(element)) {
			matching.push(node);
		}
		parentNode = node;
		React.Children.forEach(element.props.children, inspectElement);
	};

	inspectElement(root, 0);

	return matching;
};
