// @flow
export type SelectorType = "id" | "className" | "attribute" | "tag" | "type";

export default (selector:string|Function):SelectorType => {
	let type:SelectorType;

	if (typeof selector === 'string') {
		switch (selector.charAt(0)) {
			case '#':
				type = 'id';
				break;

			case '.':
				type = 'className';
				break;

			case '[':
				type = 'attribute';
				break;

			default:
				type = 'tag';
				break;
		}
	} else {
		type = 'type';
	}

	return type;
};
