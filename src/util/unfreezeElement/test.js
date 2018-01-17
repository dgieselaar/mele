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
	let element = <div key="foo"><span key="bar">TEXT NODE</span></div>;

	expect(React.Children.count(element.props.children)).toBe(1);
	expect(Object.isFrozen(element.props.children[0])).toBe(true);

	element = unfreezeElement(element);

	expect(React.Children.count(element.props.children)).toBe(1);
	expect(Object.isFrozen(element.props.children[0])).toBe(false);
});
