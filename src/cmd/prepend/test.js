import React from 'react';
import theme from '../../theme';
import type { Themer } from '../../theme';

test('appends a child to the node\'s children', () => {
	let element = <div><span/></div>,
		themer:Themer = theme(element),
		result:Object;

	result = themer.prepend('div', <h1/>)
		.element();

	expect(React.Children.count(result.props.children)).toBe(2);

	expect(React.Children.toArray(result.props.children)[0].type).toBe('h1');
});
