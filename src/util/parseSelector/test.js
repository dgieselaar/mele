import React from 'react';
import { id, className, attribute, tag, type } from '.';

class Hello extends React.Component {

}

test('should throw if id is invalid', () => {
	expect(() => {
		id('#foo ');
	}).toThrow();
});

test('should return false if id differs', () => {
	expect(id('#foo')(<div id="bar"/>)).toBe(false);
});

test('should return true if id is the same', () => {
	expect(id('#foo')(<div id="foo"/>)).toBe(true);
});

test('should throw if className is invalid', () => {
	expect(() => {
		className('.foo ');
	}).toThrow();
});

test('should return false if className matches', () => {
	expect(className('.foo')(<div className="foo"/>)).toBe(true);
});

test('should return true if className matches in a list', () => {
	expect(className('.foo')(<div className="bar foo"/>)).toBe(true);
});

test('should return false if className is partially matched', () => {
	expect(className('.foo')(<div className="foobar barfoo"/>)).toBe(false);
});

test('should throw when attribute selector is invalid', () => {
	expect(() => {
		attribute('[role=foo');
	}).toThrow();
});

test('should return true if attribute matches', () => {
	expect(attribute('[role=foo]')(<div role="foo"/>)).toBe(true);
});

test('should return false if attribute does not match', () => {
	expect(attribute('[role=foo]')(<div role="bar"/>)).toBe(false);
});

test('should throw when tag selector is invalid', () => {
	expect(() => {
		tag('element name');
	}).toThrow();
});

test('should return true if tag matches', () => {
	expect(tag('div')(<div/>)).toBe(true);
});

test('should return true if type matches w/ custom component', () => {
	expect(type(Hello)(<Hello/>)).toBe(true);
});

test('should return true if type matches w/ stateless component', () => {
	let HelloStateless = () => <div/>;
	expect(type(HelloStateless)(<HelloStateless/>)).toBe(true);
});

test('should return false if type does not match', () => {
	let HelloStateless = () => <div/>;
	expect(type(Hello)(<HelloStateless/>)).toBe(false);
});
