import React from 'react';
import unfreezeElement from '.';

test('unfreezes element', () => {
	let element = <div/>;

	expect(Object.isFrozen(element)).toBe(true);

	element = unfreezeElement(element);

	expect(Object.isFrozen(element)).toBe(false);
});

test('unfreezes props', () => {
	let element = <div key="foo"/>;

	expect(Object.isFrozen(element.props)).toBe(true);

	element = unfreezeElement(element);

	expect(Object.isFrozen(element.props)).toBe(false);
});

test('unfreezes all children', () => {
	let element = <div key="foo"><span key="bar"/></div>;

	expect(Object.isFrozen(element.props.children)).toBe(true);

	expect(React.Children.count(element.props.children)).toBe(1);

	element = unfreezeElement(element);

	expect(Object.isFrozen(element.props.children)).toBe(false);

	expect(React.Children.count(element.props.children)).toBe(1);
});
