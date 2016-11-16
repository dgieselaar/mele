import type { ElementNode } from '../../util/findElements';

export type Properties = { [name:string]: any };

export default (root:Object, nodes:Array<ElementNode>, properties:Properties|Function):Object => {
	nodes.forEach((node:ElementNode) => {
		if (typeof properties === 'function') {
			node.element.props = properties(node.element.props);
		} else {
			for (let key:string in properties) {
				node.element.props[key] = properties[key];
			}
		}
	});

	return root;
};
