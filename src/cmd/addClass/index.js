import React from 'react';

import type { ElementNode } from '../../util/findElements';

export default (root:Object, nodes:Array<ElementNode>, className:String):Object => {
	nodes.forEach(node => {
		node.element.props.className =
			(node.element.props.className || '')
				.split(' ')
				.concat(
					className.split(' ')
				)
				.filter(name => !!name)
				.join(' ');
	});

	return root;
};
