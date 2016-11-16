// @flow
import type { SelectorType } from '../getSelectorType';

export type MatchingFunction = (element:any) => boolean;

type Properties = { [name:string]: string };

let getErrorMessage = (type:SelectorType, selector:string, regex:RegExp):string => {
	return `Invalid selector for ${type}: ${selector} does not match ${regex.toString()}`;
};

let matchProps = (element:any, props:Properties):boolean => {
	for (let key:string in props) {
		let value:string = props[key];
		if (element.props[key] !== value) {
			return false;
		}
	}
	return true;
};

export const id = (selector:string):MatchingFunction => {
	let regex:RegExp = /^#([^\s]{1,})$/,
		matches = selector.match(regex),
		id;

	if (!matches) {
		throw new Error(getErrorMessage('id', selector, regex));
	}

	id = matches[1];

	return (element:any):boolean => matchProps(element, { id });
};

export const className = (selector:string):MatchingFunction => {
	let regex:RegExp = /^\.([^\s]{1,})$/,
		matches = selector.match(regex),
		className:string;

	if (!matches) {
		throw new Error(getErrorMessage('className', selector, regex));
	}

	className = matches[1];

	return (element:any):boolean => {
		let elementClassName:string = element.props && element.props.className || '',
			names = elementClassName.split(' ');

		return names.indexOf(className) !== -1;
	};
};

export const attribute = (selector:string):MatchingFunction => {
	let regex:RegExp = /^\[([^\s]{1,})=(.*?)\]$/,
		matches = selector.match(regex),
		name:string,
		value:string;

	if (!matches) {
		throw new Error(getErrorMessage('attribute', selector, regex));
	}

	name = matches[1];
	value = matches[2];

	return (element:any):boolean => matchProps(element, { [name]: value });
};

export const tag = (selector:string):MatchingFunction => {
	let regex:RegExp = /^([\w-]{1,})$/,
		matches = selector.match(regex),
		name:string;

	if (!matches) {
		throw new Error(getErrorMessage('tag', selector, regex));
	}

	name = matches[1];

	return (element:any):boolean => element.type === name;
};

export const type = (selector:Function):MatchingFunction => {
	return (element:any):boolean => element.type === selector;
};
