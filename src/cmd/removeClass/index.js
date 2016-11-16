import React from 'react';

import type { ElementNode } from '../../util/findElements';

export default (root:Object, nodes:Array<ElementNode>, className:String):Object => {
	nodes.forEach(node => {
		let names = className.split(' ');

		node.element.props.className =
			(node.element.props.className || '')
				.split(' ')
				.filter(name => names.indexOf(name) === -1)
				.filter(name => !!name)
				.join(' ');
	});

	return root;
};
