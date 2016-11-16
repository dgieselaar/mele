import React from 'react';
import type { ElementNode } from '../util/findElements';

export default (root:Object, nodes:Array<ElementNode>, sibling:Object) => {
	nodes.forEach((node:ElementNode) => {
		node.parent.element.props.children =
			React.Children.toArray(node.parent.element.props.children)
				.reduce((prev:Array, child:Object, currentIndex:number) => {
					if (currentIndex === node.index) {
						prev = prev.concat(sibling);
					}

					prev = prev.concat(sibling);

					return prev;
				}, []);
	});

	return root;
};
