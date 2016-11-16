/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _theme = __webpack_require__(2);

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _theme2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _replace = __webpack_require__(3);

	var _replace2 = _interopRequireDefault(_replace);

	var _addClass = __webpack_require__(4);

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(5);

	var _removeClass2 = _interopRequireDefault(_removeClass);

	var _after = __webpack_require__(6);

	var _after2 = _interopRequireDefault(_after);

	var _before = __webpack_require__(7);

	var _before2 = _interopRequireDefault(_before);

	var _append = __webpack_require__(8);

	var _append2 = _interopRequireDefault(_append);

	var _prepend = __webpack_require__(9);

	var _prepend2 = _interopRequireDefault(_prepend);

	var _prop = __webpack_require__(10);

	var _prop2 = _interopRequireDefault(_prop);

	var _removeProp = __webpack_require__(11);

	var _removeProp2 = _interopRequireDefault(_removeProp);

	var _findElements = __webpack_require__(12);

	var _findElements2 = _interopRequireDefault(_findElements);

	var _unfreezeElement = __webpack_require__(16);

	var _unfreezeElement2 = _interopRequireDefault(_unfreezeElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root) {
		// unfreeze object
		var rootEl = (0, _unfreezeElement2.default)(root),
		    wrapper = {
			element: function element() {
				return rootEl;
			}
		},
		    utils = {
			replace: _replace2.default,
			addClass: _addClass2.default,
			removeClass: _removeClass2.default,
			after: _after2.default,
			before: _before2.default,
			append: _append2.default,
			prepend: _prepend2.default,
			prop: _prop2.default,
			removeProp: _removeProp2.default
		};

		Object.keys(utils).forEach(function (key, value) {
			var op = utils[key];
			wrapper[key] = function (selector) {
				for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					rest[_key - 1] = arguments[_key];
				}

				rootEl = op.apply(undefined, [rootEl, (0, _findElements2.default)(rootEl, selector)].concat(rest));
				return wrapper;
			};
		});

		return wrapper;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var replace = function replace(root, node, replacementFunction) {
		var parent = node.parent,
		    replacement = void 0,
		    children = void 0;

		replacement = replacementFunction(node.element);

		if (parent) {
			children = _react2.default.Children.map(parent.element.props.children, function (element) {
				var el = element;

				if (el === node.element) {
					el = replacement;
				}

				return el;
			});

			parent.element.props.children = children;

			return root;
		}

		return replacement;
	};

	exports.default = function (root, nodes, fn) {
		return nodes.reduce(function (rt, node) {
			return replace(rt, node, fn);
		}, root);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root, nodes, className) {
		nodes.forEach(function (node) {
			node.element.props.className = (node.element.props.className || '').split(' ').concat(className.split(' ')).filter(function (name) {
				return !!name;
			}).join(' ');
		});

		return root;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root, nodes, className) {
		nodes.forEach(function (node) {
			var names = className.split(' ');

			node.element.props.className = (node.element.props.className || '').split(' ').filter(function (name) {
				return names.indexOf(name) === -1;
			}).filter(function (name) {
				return !!name;
			}).join(' ');
		});

		return root;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root, nodes, sibling) {
		nodes.forEach(function (node) {
			node.parent.element.props.children = _react2.default.Children.toArray(node.parent.element.props.children).reduce(function (prev, child, currentIndex) {
				prev = prev.concat(sibling);

				if (currentIndex === node.index) {
					prev = prev.concat(sibling);
				}

				return prev;
			}, []);
		});

		return root;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root, nodes, sibling) {
		nodes.forEach(function (node) {
			node.parent.element.props.children = _react2.default.Children.toArray(node.parent.element.props.children).reduce(function (prev, child, currentIndex) {
				if (currentIndex === node.index) {
					prev = prev.concat(sibling);
				}

				prev = prev.concat(sibling);

				return prev;
			}, []);
		});

		return root;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root, nodes, child) {
		nodes.forEach(function (node) {
			node.element.props.children = _react2.default.Children.toArray(node.element.props.children).concat(child);
		});

		return root;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root, nodes, child) {
		nodes.forEach(function (node) {
			node.element.props.children = [child].concat(_react2.default.Children.toArray(node.element.props.children));
		});

		return root;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (root, nodes, properties) {
		nodes.forEach(function (node) {
			if (typeof properties === 'function') {
				node.element.props = properties(node.element.props);
			} else {
				for (var key in properties) {
					node.element.props[key] = properties[key];
				}
			}
		});

		return root;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _prop = __webpack_require__(10);

	var _prop2 = _interopRequireDefault(_prop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (root, nodes, propName) {
		(0, _prop2.default)(root, nodes, function (props) {
			propName.split(' ').forEach(function (name) {
				delete props[name];
			});

			return props;
		});
		return root;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getSelector = __webpack_require__(13);

	var _getSelector2 = _interopRequireDefault(_getSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//eslint-disableline

	exports.default = function (root, selector) {
		var matching = [],
		    matchingFunction = (0, _getSelector2.default)(selector),
		    parentNode = void 0;

		var inspectElement = function inspectElement(element, index) {
			var node = { element: element, parent: parentNode, index: index };

			if (matchingFunction(element)) {
				matching.push(node);
			}
			parentNode = node;
			_react2.default.Children.forEach(element.props.children, inspectElement);
		};

		inspectElement(root, 0);

		return matching;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getSelectorType = __webpack_require__(14);

	var _getSelectorType2 = _interopRequireDefault(_getSelectorType);

	var _parseSelector = __webpack_require__(15);

	var selectors = _interopRequireWildcard(_parseSelector);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (selector) {
		var type = (0, _getSelectorType2.default)(selector),
		    matchingFunction = selectors[type](selector);

		return matchingFunction;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (selector) {
		var type = void 0;

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

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var getErrorMessage = function getErrorMessage(type, selector, regex) {
		return 'Invalid selector for ' + type + ': ' + selector + ' does not match ' + regex.toString();
	};


	var matchProps = function matchProps(element, props) {
		for (var key in props) {
			var value = props[key];
			if (element.props[key] !== value) {
				return false;
			}
		}
		return true;
	};

	var id = exports.id = function id(selector) {
		var regex = /^#([^\s]{1,})$/,
		    matches = selector.match(regex),
		    id = void 0;

		if (!matches) {
			throw new Error(getErrorMessage('id', selector, regex));
		}

		id = matches[1];

		return function (element) {
			return matchProps(element, { id: id });
		};
	};

	var className = exports.className = function className(selector) {
		var regex = /^\.([^\s]{1,})$/,
		    matches = selector.match(regex),
		    className = void 0;

		if (!matches) {
			throw new Error(getErrorMessage('className', selector, regex));
		}

		className = matches[1];

		return function (element) {
			var elementClassName = element.props && element.props.className || '',
			    names = elementClassName.split(' ');

			return names.indexOf(className) !== -1;
		};
	};

	var attribute = exports.attribute = function attribute(selector) {
		var regex = /^\[([^\s]{1,})=(.*?)\]$/,
		    matches = selector.match(regex),
		    name = void 0,
		    value = void 0;

		if (!matches) {
			throw new Error(getErrorMessage('attribute', selector, regex));
		}

		name = matches[1];
		value = matches[2];

		return function (element) {
			return matchProps(element, _defineProperty({}, name, value));
		};
	};

	var tag = exports.tag = function tag(selector) {
		var regex = /^([\w-]{1,})$/,
		    matches = selector.match(regex),
		    name = void 0;

		if (!matches) {
			throw new Error(getErrorMessage('tag', selector, regex));
		}

		name = matches[1];

		return function (element) {
			return element.type === name;
		};
	};

	var type = exports.type = function type(selector) {
		return function (element) {
			return element.type === selector;
		};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var unfreezeElement = function unfreezeElement(element) {
		var obj = element;

		// I think React only freezes elements when in dev mode,
		// so we might not need to clone object as mutable in production mode
		if (Object.isFrozen(obj)) {
			obj = Object.assign({}, obj, {
				props: Object.assign({}, obj.props, {
					// this changes the keys of a child
					children: _react2.default.Children.map(obj.props.children, unfreezeElement)
				})
			});
		}

		return obj;
	};

	exports.default = unfreezeElement;

/***/ }
/******/ ]);