import React from 'react';
import isString from '../isString';

let unfreezeElement = (element:Object):Object => {
	let obj:Object = element;
	// I think React only freezes elements when in dev mode,
	// so we might not need to clone object as mutable in production mode
	if (isString(obj) || !Object.isFrozen(obj)) {
		return obj;
	}

	let children = []
	React.Children.forEach(obj.props.children, el => children.push(unfreezeElement(el)))

	return Object.assign(
		{},
		obj,
		{
			props: Object.assign(
				{},
				obj.props,
				{
					children
				}
			)
		}
	);
};


export default unfreezeElement;
