import React from 'react';
import theme from '../../theme';
import type { Themer } from '../../theme';

test('remove a class', () => {
	let element = <div className="foo"/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.removeClass('div', 'foo')
		.element();

	expect(result.props.className).toBe('');
});

test('remove only the specified class', () => {
	let element = <div className="bar foo"/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.removeClass('div', 'foo')
		.element();

	expect(result.props.className).toBe('bar');
});

test('remove multiple classes', () => {
	let element = <div className="bar foo baz"/>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.removeClass('div', 'foo baz')
		.element();

	expect(result.props.className).toBe('bar');
});
