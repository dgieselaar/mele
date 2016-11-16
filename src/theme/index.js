// @flow
import replace from '../cmd/replace';
import addClass from '../cmd/addClass';
import removeClass from '../cmd/removeClass';
import after from '../cmd/after';
import before from '../cmd/before';
import append from '../cmd/append';
import prepend from '../cmd/prepend';
import prop from '../cmd/prop';
import removeProp from '../cmd/removeProp';
import findElements from '../util/findElements';
import unfreezeElement from '../util/unfreezeElement';

import { Properties } from '../cmd/prop';

export type Themer = {
	element: () => Object,
	replace?: (selector:string|Function, replacementFn:Function) => Themer,
	addClass?: (selector:string|Function, className:string) => Themer,
	removeClass?: (selector:string|Function, className:string) => Themer,
	after?: (selector:string|Function, sibling:Object) => Themer,
	before?: (selector:string|Function, sibling:Object) => Themer,
	append?: (selector:string|Function, child:Object) => Themer,
	prepend?: (selector:string|Function, child:Object) => Themer,
	prop?: (selector:string|Function, properties:Properties|Function) => Themer,
	removeProp?: (selector:string|Function, propName:string) => Themer
};

export default (root:any):Themer => {
	// unfreeze object
	let rootEl:Object = unfreezeElement(root),
		wrapper:Themer = {
			element: ():Object => rootEl
		},
		utils = {
			replace,
			addClass,
			removeClass,
			after,
			before,
			append,
			prepend,
			prop,
			removeProp
		};

	Object.keys(utils)
		.forEach((key, value) => {
			let op:Function = utils[key];
			wrapper[key] = (selector:string|Function, ...rest):any => {
				rootEl = op(
					rootEl,
					findElements(rootEl, selector),
					...rest
				);
				return wrapper;
			};
		});

	return wrapper;
};
