import React from 'react';
import theme from '../../theme';
import type { Themer } from '../../theme';

test('adds a class if it doesn\'t exist', () => {
	let element = <div/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.addClass('div', 'foo')
		.element();

	expect(result.props.className).toBe('foo');
});

test('adds a class if one exists', () => {
	let element = <div className="bar"/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.addClass('div', 'foo')
		.element();

	expect(result.props.className).toBe('bar foo');
});

test('adds multiple classes if specified', () => {
	let element = <div className="bar"/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.addClass('div', 'foo baz')
		.element();

	expect(result.props.className).toBe('bar foo baz');
});
