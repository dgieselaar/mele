import React from 'react';
import theme from '../../theme';
import type { Themer } from '../../theme';

test('removes the given property on the element', () => {
	let element = <div foo="bar"/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.removeProp('div', 'foo')
		.element();

	expect(result.props.foo).toBeUndefined();
});

test('removes all given properties if multiple', () => {
	let element = <div foo="bar" bar="foo" baz="qux"/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.removeProp('div', 'bar baz')
		.element();

	expect(result.props.foo).toBe('bar');
	expect(result.props.bar).toBeUndefined();
	expect(result.props.baz).toBeUndefined();
});
