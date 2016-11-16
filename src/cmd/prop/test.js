import React from 'react';
import theme from '../../theme';
import type { Themer } from '../../theme';

test('sets the given property on the element', () => {
	let element = <div/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.prop('div', { foo: 'bar' })
		.element();

	expect(result.props.foo).toBe('bar');
});

test('if given a function, replaces the properties with the result', () => {
	let element = <div foo="bar"/>,
		themer:Themer = theme(element),
		spy = jasmine.createSpy('prop').and.returnValue({ bar: 'foo' }),
		result:Object;

	result = themer.prop('div', spy)
		.element();

	expect(result.props.bar).toBe('foo');
	expect(result.props.foo).toBeUndefined();
});
