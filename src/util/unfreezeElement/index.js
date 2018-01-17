import React from 'react';
import isString from '../isString';

let unfreezeElement = (element:Object):Object => {
	let obj:Object = element;

	// I think React only freezes elements when in dev mode,
	// so we might not need to clone object as mutable in production mode
	if (!isString(obj) && Object.isFrozen(obj)) {
		obj = Object.assign(
			{},
			obj,
			{
				props: Object.assign(
					{},
					obj.props,
					{
						// this changes the keys of a child
						children: React.Children.map(obj.props.children, unfreezeElement)
					}
				)
			}
		);
	}

	return obj;
};


export default unfreezeElement;
