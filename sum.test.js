const sum = require('./sum');

/**
 * it() - 2 Parameters (nameOfTheTest, cb)
 */
it('should add 1 + 2 to equal 3', () => {
	const result = sum(1, 2);
	/**
	 * Asertion Area.
	 * We expect that the result is 3 but how can we tell it jest to prove our point.
	 */
	expect(result).toEqual(3);
});

it('should add 1 + 2 to be equal 3', () => {
	const result = sum(1, 2);
	expect(result).toBe(3);
});

// There is multiple matchers or vergleichers
/**
 * .toBe()
 * .toEquality()
 *  https://jestjs.io/docs/expect
 */

// Grouping tests together
describe('Example', () => {
	it('should add 1 + 2 to equal 3', () => {
		const result = sum(1, 2);
		expect(result).toEqual(3);
	});
	// This tests fail if we use .toBe() instead of .toEqual()
	// {} === {} false thats the reason we have toEqual to compare theses stuffs.
	it('object assignment', () => {
		const obj = {};
		expect(obj).toEqual({});
	});
});

describe('truthy & falsy', () => {
	it('null', () => {
		const n = 0;
		expect(n).toBeFalsy();
		// You can negate the condition by adding a not
		// its not best practice to have multiple expects because then you dont know what the reason is that it failed.
		expect(n).not.toBeTruthy();

		// what if you want to check if the value is null.
		// expect(n).toBeNull();
		// you can also check for undefined
		// expect(n).toBeUndefined();

		// expect(n).not.toBeUndefined();

    
	});
});
