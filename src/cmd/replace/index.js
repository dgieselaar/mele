// @flow
import React from 'react';

import type { ElementNode } from '../../util/findElements';

const replace = (root:Object, node:ElementNode, replacementFunction:Function):Object => {
	let parent:?ElementNode = node.parent,
		replacement:any,
		children:Array<Object>;

	replacement = replacementFunction(node.element);

	if (parent) {
		children =
			React.Children.map(
				parent.element.props.children,
				(element:Object):Object => {
					let el:Object = element;

					if (el === node.element) {
						el = replacement;
					}

					return el;
				}
			);

		parent.element.props.children = children;

		return root;
	}

	return replacement;
};

export default (root:Object, nodes:Array<ElementNode>, fn:Function):Object => {
	return nodes.reduce((rt:Object, node:ElementNode):Object => {
		return replace(rt, node, fn);
	}, root);
};
