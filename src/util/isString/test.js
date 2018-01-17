import isString from '.';

test('string literals', () => {
	expect(isString('a string literal')).toBe(true)
})

test('string objects', () => {
	expect(isString(new String('a string object'))).toBe(true)
})

test('other types', () => {
	expect(isString(1)).toBe(false)
	expect(isString({a: 'obj'})).toBe(false)
	expect(isString(['arr'])).toBe(false)
	expect(isString(/regexp/)).toBe(false)
	expect(isString(new Date())).toBe(false)
})
