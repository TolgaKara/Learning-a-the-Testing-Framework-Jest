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
 * .toEqualt()
 *
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
