import { test, expect } from 'vitest';
import { add } from './math.js'

test('should summarize all number values in an array', () => {
    // arrange
    const numbers = [1, 2];

    // act
    const result = add(numbers);

    // assert
    const expectedValue = numbers.reduce(
        (prevValue, currentValue) => prevValue + currentValue, 0
    );
    expect(result).toBe(expectedValue);
});