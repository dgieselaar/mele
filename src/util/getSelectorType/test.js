import getSelectorType from '.';
import React from 'react';

class Hello extends React.Component {

}

test('detects id', () => {
	expect(getSelectorType('#id')).toBe('id');
});

test('detects className', () => {
	expect(getSelectorType('.className')).toBe('className');
});

test('detects attribute', () => {
	expect(getSelectorType('[foo=role]')).toBe('attribute');
});

test('detects tag', () => {
	expect(getSelectorType('foo')).toBe('tag');
});

test('detects type if component', () => {
	expect(getSelectorType(Hello)).toBe('type');
});

test('detects type if stateless component', () => {
	expect(getSelectorType(() => <div/>)).toBe('type');
});

test('defaults to tag if unknown', () => {
	expect(getSelectorType(' ')).toBe('tag');
});


