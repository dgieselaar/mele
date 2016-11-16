# react-mele
# A tiny library to easily modify React element trees

`react-mele` is a library which helps you decorate/alter React element trees, using a subset of CSS selectors, inspired by JQuery methods like `addClass`, `after`, `append`, et cetera.

`$ yarn add react-mele`

`$ npm install --save react-mele`

## So... why do I need it?

Two reasons, as far as I can tell:
- __Decorating children in wrapper components__. For example, having a DropdownComponent which uses `props.children` to populate the component. You can use `mele` then to easily add classNames, or icons, or whatever you want.
- __Theming__. Suppose I have a form library which I want to style/theme. I can use a function which returns an element tree based on `props` which serves as the base theme. `mele` would then allow you to customize this theme, adding elements, classes and properties where you need them. It also paves the way for some kind of plugin architecture.

## What does that look like, then?

Well, consider the following JSX:

```jsx
let template = (
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
	</ol>
);
```

We can then add another list item, and add a className to the list items:
```jsx
import mele from 'react-mele';

let modified =
	mele(template)
		.append('ol', <li>Item 3</li>)
		.addClass('li', 'list-item')
		.element();
```

Which will result in:
```html
<ol>
	<li class="list-item">Item 1</li>
	<li class="list-item">Item 2</li>
	<li class="list-item">Item 3</li>
</ol>
```

You can also wrap or replace the component:
```jsx
modified = mele(template).replace('ol', ol => <div>{ol}</div>)
```

.. or set or remove properties
```jsx
modified = mele(template).replace('ol', { reversed: 'reversed' });
```

## Hmmm.. I'll bite. But first: how does it work?

The first thing you do, is import `mele`:

```js
import mele from 'react-mele';
```

You then call `mele` with the element tree you want to modify. Mele then returns what we call a `Themer` internally. After that, you can start chaining decorations:
```jsx
let themer =
	mele(<div/>)
		.append('div', <span/>)
		.after('span', <h1/>)
		.addClass('span', 'foo');
```

`mele` makes a copy of the element tree and adds the decorations specified. You can then get the result of the decorations by calling `element`:

```js
let decorated = themer.element();
```
The reason `mele` decorates a copy, and not the element itself, is because the element tree is read-only. It might be changed later to just mutate (in production), but that'll be an implementation detail (which won't work in dev mode either). So: treat it like a copy.

### And what can I actually change?

Every command on a `Themer` takes a `selector` argument, which can be a string or a Function. The selector is resolved to a list of elements that meet the demands of the selector (meaning you can operate on a list of 1-n elements). The following string selectors are supported:

- `#id`
- `.className`
- `[attr=value]`
- `tag`

Additionally, mele supports `type` selectors. Just pass in the React.Component class or stateless component.

Here's a list of commands you can use:

- __`addClass`__ `( selector:String|Function, className:string )`: adds a class to the element. You can use a space-separated list of classes.
- __`removeClass`__ `( selector:String|Function, className:string )`: removes a class from the element. You can use a space-separated list of classes here as well.
- __`append`__ `( selector:String|Function, child:Element )`: appends a child to the given element.
- __`prepend`__ `( selector:String|Function, child:Element )`: prepends a child to the given element. 
- __`after`__ `( selector:String|Function, sibling:Element )`: adds a sibling after the given element.
- __`before`__ `( selector:String|Function, sibling:Element )`: adds a sibling before the given element.
- __`replace`__ `( selector:String|Function, replacementFn:Function )`: Calls the given function with the element, and uses the result to replace the element.
- __`prop`__ `( selector:String|Function, properties:Object|Function )`: Copies to the given properties to the element. If `properties` is a function, it is called with the current properties of the element. The result is then used to _replace_ the element's properties. 
- __`removeProp`__ `( selector:String|Function, propName:String )`: Removes the given property from the element. You can use a space-separated list of names here, and they will all be removed from the element's properties.

### One last question: isn't this a terrible idea?

I don't really know. It's probably a bit brittle to start changing render instructions. But I'm not familiar enough with the React codebase to be able to determine how sensible this approach is. It is however fully tested though, so we'll see soon enough when/if it breaks.

