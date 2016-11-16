import React from 'react';
import findElements from '.';
import type { ElementNode } from '.';

let locateNode = (root:any, selector:SelectorType, element:any):ElementNode => {
	let nodes:Array<ElementNode> = findElements(root, selector);
	return nodes.filter((node:ElementNode) => node.element === element)[0];
};

test('it should return the root element if it matches', () => {
	let inner = <span/>,
		root = <div className="foo">{inner}</div>;

	expect(
		locateNode(root, '.foo', root)
	).toBeTruthy();

	expect(
		locateNode(root, '.foo', inner)
	).toBeFalsy();
});

test('it should return a node with the parent of the found element and the element', () => {
	let inner = <span/>,
		root = <div>{inner}</div>,
		node:ElementNode = locateNode(root, 'span', inner);

	expect(node.element).toBe(inner);
	expect(node.parent.element).toBe(root);
});

test('it should return a direct child element if it matches', () => {
	let inner = <span className="foo"/>,
		root = <div className="bar">{inner}</div>;

	expect(
		locateNode(root, '.foo', inner)
	).toBeTruthy();

	expect(
		locateNode(root, '.foo', root)
	).toBeFalsy();
});

test('it should return a descendant element if it matches', () => {
	let inner = <span className="foo"/>,
		root = <div className="bar"><div className="baz">{inner}</div></div>;

	expect(
		locateNode(root, '.foo', inner)
	).toBeTruthy();

	expect(
		findElements(root, '.foo').length
	).toBe(1);
});

test('it should return all matching elements', () => {
	let root =
		(<div>
			<span/>
			<span/>
		</div>);

	expect(
		findElements(root, 'span').length
	).toBe(2);
});
