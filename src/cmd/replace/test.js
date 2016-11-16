import React from 'react';
import replace from '.';
import theme from '../../theme';
import type { Themer } from '../../theme';

describe('if called wih root', () => {
	let root = <span/>,
		node:ElementNode = { element: root },
		wrapper = <div/>,
		spy,
		returnValue;

	beforeEach(() => {
		spy = jasmine.createSpy('replace')
			.and.returnValue(wrapper);
	});

	test('calls the function with the element to replace', () => {
		replace(root, [node], spy);

		expect(spy).toHaveBeenCalledWith(node.element);
	});

	test('returns the wrapper element if root is replaced', () => {
		returnValue = replace(root, [node], spy);

		expect(returnValue).toBe(wrapper);
	});
});

test('replace the inner node', () => {
	let inner = <span/>,
		root = <div>{inner}</div>,
		replacement = <h1/>,
		themer:Themer = theme(root),
		result:Object = themer.element();

	expect(
		React.Children.toArray(result.props.children)[0].type
	).toBe('span');

	themer.replace('span', () => replacement);

	expect(
		React.Children.toArray(result.props.children)[0].type
	).toBe('h1');
});
